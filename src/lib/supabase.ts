import { createClient } from '@supabase/supabase-js';

// Support both PUBLIC_ prefixed and non-prefixed env var names (Vercel Supabase integration uses non-prefixed)
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || import.meta.env.SUPABASE_URL || import.meta.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || import.meta.env.SUPABASE_ANON_KEY || import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables. Check your .env file or Vercel env vars.');
}

export const supabase = createClient(
  supabaseUrl || '',
  supabaseAnonKey || ''
);

// Server-side client with service role (for admin operations)
export function getServiceClient() {
  const serviceKey = import.meta.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceKey) {
    throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY');
  }
  return createClient(supabaseUrl || '', serviceKey);
}

// Types for our database
export interface TeamRegistration {
  id?: string;
  created_at?: string;
  team_name: string;
  email: string;
  phone?: string;
  team_members: string;
  project_idea?: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface DonationInquiry {
  id?: string;
  created_at?: string;
  name: string;
  email: string;
  company?: string;
  message?: string;
  amount?: string;
  status: 'new' | 'contacted' | 'confirmed' | 'declined';
}
