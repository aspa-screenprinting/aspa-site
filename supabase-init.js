/**
 * ASPA Website — Supabase Client Initialization
 *
 * Loaded on every page. Initializes the Supabase client,
 * manages auth state, and dispatches events for pages to react to.
 *
 * Exposes:
 *   window._supabase         — Supabase client instance
 *   window._supabaseSession  — Current auth session (or null)
 *   window._memberProfile    — Current member's profile row (or null)
 *
 * Dispatches:
 *   'aspa-auth-ready'        — Fired on window when auth state is resolved
 *                               detail: { session, profile }
 */
(function () {
  'use strict';

  // ── Config ──────────────────────────────────────────────────
  var SUPABASE_URL  = 'https://wstonlslhlvdtbdyteeo.supabase.co';
  var SUPABASE_KEY  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndzdG9ubHNsaGx2ZHRiZHl0ZWVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5NzQ0MzEsImV4cCI6MjA4ODU1MDQzMX0.FF-M1GDXzXT_c09dSScNA5Gpw7Zxyzcfsjeu5seHS0c';

  // ── Globals ─────────────────────────────────────────────────
  window._supabase        = null;
  window._supabaseSession = null;
  window._memberProfile   = null;

  // ── Load Supabase JS from CDN ───────────────────────────────
  var script  = document.createElement('script');
  script.src  = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js';
  script.async = true;

  script.onload = function () {
    // Initialize client
    var sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
    window._supabase = sb;

    // Resolve initial session
    sb.auth.getSession().then(function (res) {
      var session = (res.data && res.data.session) || null;
      window._supabaseSession = session;

      if (session && session.user) {
        // Fetch profile
        sb.from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single()
          .then(function (pRes) {
            window._memberProfile = (pRes.data) || null;
            _dispatch(session, window._memberProfile);
          });
      } else {
        _dispatch(null, null);
      }
    });

    // Listen for future auth changes (login, logout, token refresh)
    sb.auth.onAuthStateChange(function (event, session) {
      window._supabaseSession = session;

      if (session && session.user) {
        sb.from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single()
          .then(function (pRes) {
            window._memberProfile = (pRes.data) || null;
            _dispatch(session, window._memberProfile);
          });
      } else {
        window._memberProfile = null;
        _dispatch(null, null);
      }
    });
  };

  script.onerror = function () {
    console.error('[ASPA] Failed to load Supabase JS library');
    _dispatch(null, null);
  };

  document.head.appendChild(script);

  // ── Dispatch custom event ───────────────────────────────────
  function _dispatch(session, profile) {
    window.dispatchEvent(new CustomEvent('aspa-auth-ready', {
      detail: { session: session, profile: profile }
    }));
  }

  // ── Nav Auth Helper ─────────────────────────────────────────
  // Call this from any page to update the navAuthContainer.
  // Works with both the inline script pattern and bottom-of-page calls.
  window.updateNavForSupabase = function (profile) {
    var container = document.getElementById('navAuthContainer');
    if (!container) return;

    if (profile && profile.full_name) {
      var firstName = profile.full_name.split(' ')[0] || 'Member';
      container.innerHTML =
        '<span style="font-family:Inter,sans-serif;font-size:0.9rem;color:#b0b0b0;">Hi, ' + firstName + '</span>' +
        '<a href="dashboard.html" style="color:#00d4ff;font-family:\'Space Grotesk\',sans-serif;font-size:0.9rem;font-weight:500;text-transform:uppercase;letter-spacing:1.5px;text-decoration:none;">My ASPA+</a>' +
        '<a href="#" onclick="handleLogout(event)" style="color:#b0b0b0;font-family:Inter,sans-serif;font-size:0.85rem;cursor:pointer;text-decoration:none;">Log Out</a>';
    } else {
      container.innerHTML =
        '<a href="join.html" class="nav-cta" id="navJoinBtn">Join ASPA</a>' +
        '<a href="login.html" style="color:#b0b0b0;font-family:Inter,sans-serif;font-size:0.85rem;cursor:pointer;text-decoration:none;">Log In</a>';
    }
  };

  // ── Logout Helper ───────────────────────────────────────────
  window.handleLogout = function (e) {
    if (e) e.preventDefault();
    if (window._supabase) {
      window._supabase.auth.signOut().then(function () {
        window._supabaseSession = null;
        window._memberProfile = null;
        // Also clear legacy localStorage (transition period)
        localStorage.removeItem('aspa_member');
        localStorage.removeItem('aspa_members');
        localStorage.removeItem('aspa_firstName');
        window.location.href = 'index.html';
      });
    } else {
      // Fallback if Supabase hasn't loaded
      localStorage.removeItem('aspa_member');
      localStorage.removeItem('aspa_members');
      localStorage.removeItem('aspa_firstName');
      window.location.href = 'index.html';
    }
  };

})();
