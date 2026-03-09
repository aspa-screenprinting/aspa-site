/**
 * ASPA+ Gamification — Points System Module
 *
 * Centralized data layer for the loyalty points system.
 * Requires supabase-init.js to be loaded first (window._supabase).
 *
 * Exposes: window.PointsSystem
 *
 * Usage:
 *   const balance = await PointsSystem.getBalance();
 *   const history = await PointsSystem.getHistory(10);
 *   await PointsSystem.submitSocialLink('instagram', 'https://...');
 */
(function () {
  'use strict';

  // ── Helpers ─────────────────────────────────────────────────

  function _sb() {
    if (!window._supabase) throw new Error('[PointsSystem] Supabase not initialized');
    return window._supabase;
  }

  function _uid() {
    if (!window._supabaseSession || !window._supabaseSession.user) {
      throw new Error('[PointsSystem] Not authenticated');
    }
    return window._supabaseSession.user.id;
  }

  function _requireAdmin() {
    if (!window._memberProfile || !window._memberProfile.is_admin) {
      throw new Error('[PointsSystem] Admin access required');
    }
  }

  // ── Points Balance & History ────────────────────────────────

  /**
   * Get the current points balance for a user.
   * Balance = SUM(earn) - SUM(spend) from points_ledger.
   * @param {string} [userId] — defaults to current user
   * @returns {Promise<number>}
   */
  async function getBalance(userId) {
    var uid = userId || _uid();
    var sb = _sb();

    var { data, error } = await sb
      .from('points_ledger')
      .select('transaction_type, points_amount')
      .eq('user_id', uid);

    if (error) throw error;
    if (!data || data.length === 0) return 0;

    var balance = 0;
    for (var i = 0; i < data.length; i++) {
      if (data[i].transaction_type === 'earn') {
        balance += data[i].points_amount;
      } else {
        balance -= data[i].points_amount;
      }
    }
    return balance;
  }

  /**
   * Get points transaction history for a user.
   * @param {number} [limit=10]
   * @param {string} [userId] — defaults to current user
   * @returns {Promise<Array>}
   */
  async function getHistory(limit, userId) {
    var uid = userId || _uid();
    var sb = _sb();
    limit = limit || 10;

    var { data, error } = await sb
      .from('points_ledger')
      .select('*, activities(display_name, type)')
      .eq('user_id', uid)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) throw error;
    return data || [];
  }

  // ── Earn Points ─────────────────────────────────────────────

  /**
   * Record a points-earning transaction.
   * @param {string} userId
   * @param {string} activityId — UUID of the activity
   * @param {number} points
   * @param {string} description
   * @param {object} [metadata]
   * @returns {Promise<object>}
   */
  async function _earnPoints(userId, activityId, points, description, metadata) {
    var sb = _sb();
    var { data, error } = await sb
      .from('points_ledger')
      .insert({
        user_id: userId,
        activity_id: activityId,
        transaction_type: 'earn',
        points_amount: points,
        description: description,
        metadata: metadata || {}
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  // ── Social Links ────────────────────────────────────────────

  /**
   * Get all social links for the current user.
   * @returns {Promise<Array>}
   */
  async function getSocialLinks() {
    var uid = _uid();
    var sb = _sb();

    var { data, error } = await sb
      .from('social_links')
      .select('*')
      .eq('user_id', uid)
      .order('created_at', { ascending: true });

    if (error) throw error;
    return data || [];
  }

  /**
   * Submit a social media link. Auto-awards points immediately.
   * @param {string} platform — instagram, tiktok, facebook, youtube
   * @param {string} url
   * @returns {Promise<{link: object, pointsEntry: object}>}
   */
  async function submitSocialLink(platform, url) {
    var uid = _uid();
    var sb = _sb();

    // Insert social link
    var { data: link, error: linkErr } = await sb
      .from('social_links')
      .insert({
        user_id: uid,
        platform: platform,
        url: url
      })
      .select()
      .single();

    if (linkErr) {
      if (linkErr.code === '23505') {
        throw new Error('You have already connected ' + platform);
      }
      throw linkErr;
    }

    // Look up the social_connect activity
    var { data: activity } = await sb
      .from('activities')
      .select('id, points_value')
      .eq('type', 'social_connect')
      .single();

    if (!activity) throw new Error('Activity type not found');

    // Auto-award points
    var pointsEntry = await _earnPoints(
      uid,
      activity.id,
      activity.points_value,
      'Connected ' + platform + ' account',
      { social_link_id: link.id, platform: platform }
    );

    return { link: link, pointsEntry: pointsEntry };
  }

  /**
   * Remove a social link.
   * Note: Does NOT deduct points (points are non-reversible).
   * @param {string} linkId
   * @returns {Promise<void>}
   */
  async function removeSocialLink(linkId) {
    var uid = _uid();
    var sb = _sb();

    var { error } = await sb
      .from('social_links')
      .delete()
      .eq('id', linkId)
      .eq('user_id', uid);

    if (error) throw error;
  }

  // ── Activity Claims (Webinars, Supplier Signups) ────────────

  /**
   * Submit an activity claim (pending admin approval).
   * @param {string} activityType — 'webinar_watched' or 'supplier_signup'
   * @param {string} [evidence] — URL or description
   * @returns {Promise<object>} — the created claim
   */
  async function submitClaim(activityType, evidence) {
    var uid = _uid();
    var sb = _sb();

    // Look up activity
    var { data: activity, error: actErr } = await sb
      .from('activities')
      .select('id')
      .eq('type', activityType)
      .single();

    if (actErr || !activity) throw new Error('Unknown activity type: ' + activityType);

    var { data: claim, error: claimErr } = await sb
      .from('activity_claims')
      .insert({
        user_id: uid,
        activity_id: activity.id,
        status: 'pending',
        evidence: evidence || null
      })
      .select()
      .single();

    if (claimErr) throw claimErr;
    return claim;
  }

  /**
   * Get all claims for the current user.
   * @param {string} [status] — optional filter: 'pending', 'approved', 'denied'
   * @returns {Promise<Array>}
   */
  async function getMyClaims(status) {
    var uid = _uid();
    var sb = _sb();

    var query = sb
      .from('activity_claims')
      .select('*, activities(display_name, type, points_value)')
      .eq('user_id', uid)
      .order('submitted_at', { ascending: false });

    if (status) query = query.eq('status', status);

    var { data, error } = await query;
    if (error) throw error;
    return data || [];
  }

  // ── Rewards & Redemptions ───────────────────────────────────

  /**
   * Get all active rewards, optionally filtered by category.
   * @param {string} [category] — 'small', 'medium', 'large'
   * @returns {Promise<Array>}
   */
  async function getRewards(category) {
    var sb = _sb();

    var query = sb
      .from('rewards')
      .select('*')
      .eq('is_active', true)
      .order('points_cost', { ascending: true });

    if (category) query = query.eq('category', category);

    var { data, error } = await query;
    if (error) throw error;
    return data || [];
  }

  /**
   * Redeem a reward. Checks balance, creates ledger entry + redemption.
   * @param {string} rewardId
   * @returns {Promise<{redemption: object, newBalance: number}>}
   */
  async function redeemReward(rewardId) {
    var uid = _uid();
    var sb = _sb();

    // 1. Get the reward
    var { data: reward, error: rErr } = await sb
      .from('rewards')
      .select('*')
      .eq('id', rewardId)
      .single();

    if (rErr || !reward) throw new Error('Reward not found');
    if (!reward.is_active) throw new Error('This reward is no longer available');

    // 2. Check quantity
    if (reward.quantity_available !== null && reward.quantity_claimed >= reward.quantity_available) {
      throw new Error('This reward is sold out');
    }

    // 3. Check balance
    var balance = await getBalance();
    if (balance < reward.points_cost) {
      throw new Error('Insufficient points. You need ' + (reward.points_cost - balance) + ' more points.');
    }

    // 4. Create spend entry in ledger
    var { error: ledgerErr } = await sb
      .from('points_ledger')
      .insert({
        user_id: uid,
        transaction_type: 'spend',
        points_amount: reward.points_cost,
        description: 'Redeemed: ' + reward.title,
        metadata: { reward_id: rewardId }
      });

    if (ledgerErr) throw ledgerErr;

    // 5. Create redemption record
    var { data: redemption, error: redErr } = await sb
      .from('redemptions')
      .insert({
        user_id: uid,
        reward_id: rewardId,
        points_spent: reward.points_cost
      })
      .select()
      .single();

    if (redErr) throw redErr;

    // 6. Increment quantity_claimed
    if (reward.quantity_available !== null) {
      await sb
        .from('rewards')
        .update({ quantity_claimed: reward.quantity_claimed + 1 })
        .eq('id', rewardId);
    }

    var newBalance = balance - reward.points_cost;
    return { redemption: redemption, newBalance: newBalance };
  }

  /**
   * Get redemption history for the current user.
   * @param {number} [limit=10]
   * @returns {Promise<Array>}
   */
  async function getRedemptions(limit) {
    var uid = _uid();
    var sb = _sb();
    limit = limit || 10;

    var { data, error } = await sb
      .from('redemptions')
      .select('*, rewards(title, category, reward_type)')
      .eq('user_id', uid)
      .order('claimed_at', { ascending: false })
      .limit(limit);

    if (error) throw error;
    return data || [];
  }

  // ── Admin Functions ─────────────────────────────────────────

  /**
   * Get all pending claims (admin only).
   * @returns {Promise<Array>}
   */
  async function getPendingClaims() {
    _requireAdmin();
    var sb = _sb();

    var { data, error } = await sb
      .from('activity_claims')
      .select('*, activities(display_name, type, points_value), profiles:user_id(full_name, email)')
      .eq('status', 'pending')
      .order('submitted_at', { ascending: true });

    if (error) throw error;
    return data || [];
  }

  /**
   * Approve a claim — awards points to the member.
   * @param {string} claimId
   * @param {string} [notes]
   * @returns {Promise<object>}
   */
  async function approveClaim(claimId, notes) {
    _requireAdmin();
    var sb = _sb();
    var adminId = _uid();

    // Get the claim with activity info
    var { data: claim, error: cErr } = await sb
      .from('activity_claims')
      .select('*, activities(id, points_value, display_name)')
      .eq('id', claimId)
      .single();

    if (cErr || !claim) throw new Error('Claim not found');
    if (claim.status !== 'pending') throw new Error('Claim already reviewed');

    // Update claim status
    var { error: updateErr } = await sb
      .from('activity_claims')
      .update({
        status: 'approved',
        notes: notes || null,
        reviewed_at: new Date().toISOString(),
        reviewed_by: adminId
      })
      .eq('id', claimId);

    if (updateErr) throw updateErr;

    // Award points to the member
    await _earnPoints(
      claim.user_id,
      claim.activities.id,
      claim.activities.points_value,
      claim.activities.display_name + ' (approved)',
      { claim_id: claimId }
    );

    return claim;
  }

  /**
   * Deny a claim.
   * @param {string} claimId
   * @param {string} [reason]
   * @returns {Promise<void>}
   */
  async function denyClaim(claimId, reason) {
    _requireAdmin();
    var sb = _sb();
    var adminId = _uid();

    var { error } = await sb
      .from('activity_claims')
      .update({
        status: 'denied',
        notes: reason || 'Denied by admin',
        reviewed_at: new Date().toISOString(),
        reviewed_by: adminId
      })
      .eq('id', claimId);

    if (error) throw error;
  }

  /**
   * Award bonus points to a member (admin only).
   * @param {string} userId
   * @param {number} amount
   * @param {string} reason
   * @returns {Promise<object>}
   */
  async function awardBonusPoints(userId, amount, reason) {
    _requireAdmin();
    var sb = _sb();

    // Get custom_admin_award activity
    var { data: activity } = await sb
      .from('activities')
      .select('id')
      .eq('type', 'custom_admin_award')
      .single();

    return await _earnPoints(
      userId,
      activity ? activity.id : null,
      amount,
      reason || 'Bonus points from admin',
      { awarded_by: _uid() }
    );
  }

  /**
   * Get all claims (admin), optionally filtered by status.
   * @param {string} [status]
   * @returns {Promise<Array>}
   */
  async function getAllClaims(status) {
    _requireAdmin();
    var sb = _sb();

    var query = sb
      .from('activity_claims')
      .select('*, activities(display_name, type, points_value), profiles:user_id(full_name, email)')
      .order('submitted_at', { ascending: false });

    if (status) query = query.eq('status', status);

    var { data, error } = await query;
    if (error) throw error;
    return data || [];
  }

  /**
   * Get all activities (for admin management).
   * @returns {Promise<Array>}
   */
  async function getActivities() {
    var sb = _sb();
    var { data, error } = await sb
      .from('activities')
      .select('*')
      .order('points_value', { ascending: true });

    if (error) throw error;
    return data || [];
  }

  // ── Admin: Reward Management ────────────────────────────────

  /**
   * Create a new reward (admin only).
   * @param {object} reward
   * @returns {Promise<object>}
   */
  async function createReward(reward) {
    _requireAdmin();
    var sb = _sb();

    var { data, error } = await sb
      .from('rewards')
      .insert(reward)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  /**
   * Update a reward (admin only).
   * @param {string} rewardId
   * @param {object} updates
   * @returns {Promise<object>}
   */
  async function updateReward(rewardId, updates) {
    _requireAdmin();
    var sb = _sb();

    var { data, error } = await sb
      .from('rewards')
      .update(updates)
      .eq('id', rewardId)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  /**
   * Deactivate a reward (soft delete, admin only).
   * @param {string} rewardId
   * @returns {Promise<void>}
   */
  async function deactivateReward(rewardId) {
    _requireAdmin();
    var sb = _sb();

    var { error } = await sb
      .from('rewards')
      .update({ is_active: false })
      .eq('id', rewardId);

    if (error) throw error;
  }

  // ── Admin: Stats ────────────────────────────────────────────

  /**
   * Get gamification system stats (admin only).
   * @returns {Promise<object>}
   */
  async function getSystemStats() {
    _requireAdmin();
    var sb = _sb();

    // Total points in circulation
    var { data: ledger } = await sb
      .from('points_ledger')
      .select('transaction_type, points_amount');

    var totalEarned = 0, totalSpent = 0;
    if (ledger) {
      for (var i = 0; i < ledger.length; i++) {
        if (ledger[i].transaction_type === 'earn') totalEarned += ledger[i].points_amount;
        else totalSpent += ledger[i].points_amount;
      }
    }

    // Pending claims count
    var { count: pendingCount } = await sb
      .from('activity_claims')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'pending');

    // Total redemptions
    var { count: redemptionCount } = await sb
      .from('redemptions')
      .select('*', { count: 'exact', head: true });

    // Total members with points
    var { data: uniqueUsers } = await sb
      .from('points_ledger')
      .select('user_id')
      .limit(1000);

    var memberSet = {};
    if (uniqueUsers) {
      for (var j = 0; j < uniqueUsers.length; j++) {
        memberSet[uniqueUsers[j].user_id] = true;
      }
    }

    return {
      totalEarned: totalEarned,
      totalSpent: totalSpent,
      inCirculation: totalEarned - totalSpent,
      pendingClaims: pendingCount || 0,
      totalRedemptions: redemptionCount || 0,
      activeMembersWithPoints: Object.keys(memberSet).length
    };
  }

  // ── Expose API ──────────────────────────────────────────────

  window.PointsSystem = {
    // Member functions
    getBalance: getBalance,
    getHistory: getHistory,
    getSocialLinks: getSocialLinks,
    submitSocialLink: submitSocialLink,
    removeSocialLink: removeSocialLink,
    submitClaim: submitClaim,
    getMyClaims: getMyClaims,
    getRewards: getRewards,
    redeemReward: redeemReward,
    getRedemptions: getRedemptions,
    getActivities: getActivities,

    // Admin functions
    getPendingClaims: getPendingClaims,
    approveClaim: approveClaim,
    denyClaim: denyClaim,
    awardBonusPoints: awardBonusPoints,
    getAllClaims: getAllClaims,
    createReward: createReward,
    updateReward: updateReward,
    deactivateReward: deactivateReward,
    getSystemStats: getSystemStats
  };

})();
