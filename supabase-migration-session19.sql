-- ============================================================
-- ASPA Community Chat — Session 19 Migration
-- Features: Emoji Reactions, @Mentions/Replies, Image Sharing, Pinned Messages
-- Run this in Supabase SQL Editor BEFORE deploying the updated community.html
-- ============================================================

-- 1. Reactions table
CREATE TABLE IF NOT EXISTS community_reactions (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    message_id uuid REFERENCES community_messages(id) ON DELETE CASCADE,
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
    emoji text NOT NULL,
    created_at timestamptz DEFAULT now(),
    UNIQUE(message_id, user_id, emoji)
);

ALTER TABLE community_reactions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read reactions" ON community_reactions
    FOR SELECT USING (true);

CREATE POLICY "Auth users can add reactions" ON community_reactions
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can remove own reactions" ON community_reactions
    FOR DELETE USING (auth.uid() = user_id);

-- Enable realtime for reactions
ALTER PUBLICATION supabase_realtime ADD TABLE community_reactions;

-- 2. Add reply_to column for threaded replies / @mentions
ALTER TABLE community_messages ADD COLUMN IF NOT EXISTS reply_to uuid REFERENCES community_messages(id) ON DELETE SET NULL;

-- 3. Add attachment columns for image/file sharing
ALTER TABLE community_messages ADD COLUMN IF NOT EXISTS attachment_url text;
ALTER TABLE community_messages ADD COLUMN IF NOT EXISTS attachment_type text; -- 'image' or 'file'

-- 4. Add is_pinned column for pinned messages
ALTER TABLE community_messages ADD COLUMN IF NOT EXISTS is_pinned boolean DEFAULT false;

-- 5. Create storage bucket for chat attachments (if not exists)
INSERT INTO storage.buckets (id, name, public)
VALUES ('chat-attachments', 'chat-attachments', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for chat attachments
CREATE POLICY "Anyone can view chat attachments"
    ON storage.objects FOR SELECT
    USING (bucket_id = 'chat-attachments');

CREATE POLICY "Auth users can upload chat attachments"
    ON storage.objects FOR INSERT
    WITH CHECK (bucket_id = 'chat-attachments' AND auth.role() = 'authenticated');

CREATE POLICY "Users can delete own chat attachments"
    ON storage.objects FOR DELETE
    USING (bucket_id = 'chat-attachments' AND auth.uid()::text = (storage.foldername(name))[1]);
