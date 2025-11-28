-- Supabase Schema for VibeCodeUtah
-- Run this in your Supabase SQL Editor: https://supabase.com/dashboard/project/YOUR_PROJECT/sql

-- Team Registrations Table
CREATE TABLE IF NOT EXISTS team_registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  -- Team Info
  team_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  team_members TEXT NOT NULL,
  project_idea TEXT,

  -- Status tracking
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  notes TEXT,

  -- Constraints
  UNIQUE(email)
);

-- Donation/Sponsor Inquiries Table
CREATE TABLE IF NOT EXISTS donation_inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  -- Contact Info
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,

  -- Inquiry Details
  inquiry_type TEXT DEFAULT 'donation' CHECK (inquiry_type IN ('donation', 'sponsorship', 'prize', 'other')),
  amount TEXT,
  message TEXT,

  -- Status tracking
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'confirmed', 'declined')),
  notes TEXT
);

-- Contact Form Submissions (general inquiries)
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,

  status TEXT DEFAULT 'unread' CHECK (status IN ('unread', 'read', 'replied'))
);

-- NOTE: RLS is disabled for local development simplicity
-- For production, enable RLS and create proper policies
-- ALTER TABLE team_registrations ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE donation_inquiries ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policies: Allow insert from anyone (for form submissions)
-- These work when RLS is enabled
CREATE POLICY "Allow public insert on team_registrations"
  ON team_registrations FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow public insert on donation_inquiries"
  ON donation_inquiries FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public insert on contact_submissions"
  ON contact_submissions FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policies: Allow authenticated users (admins) to read/update/delete
CREATE POLICY "Allow authenticated read on team_registrations"
  ON team_registrations FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated update on team_registrations"
  ON team_registrations FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated delete on team_registrations"
  ON team_registrations FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated read on donation_inquiries"
  ON donation_inquiries FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated update on donation_inquiries"
  ON donation_inquiries FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated read on contact_submissions"
  ON contact_submissions FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated update on contact_submissions"
  ON contact_submissions FOR UPDATE
  TO authenticated
  USING (true);

-- Indexes for better performance
CREATE INDEX IF NOT EXISTS idx_team_registrations_status ON team_registrations(status);
CREATE INDEX IF NOT EXISTS idx_team_registrations_created ON team_registrations(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_donation_inquiries_status ON donation_inquiries(status);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for updated_at
CREATE TRIGGER update_team_registrations_updated_at
  BEFORE UPDATE ON team_registrations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_donation_inquiries_updated_at
  BEFORE UPDATE ON donation_inquiries
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
