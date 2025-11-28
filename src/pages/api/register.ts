import type { APIRoute } from 'astro';
import { supabase } from '@/lib/supabase';

export const prerender = false; // This must be server-rendered

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    const teamName = formData.get('team-name')?.toString();
    const email = formData.get('email')?.toString();
    const phone = formData.get('phone')?.toString() || null;
    const teamMembers = formData.get('team-members')?.toString();
    const projectIdea = formData.get('project-idea')?.toString() || null;

    // Validation
    if (!teamName || !email || !teamMembers) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Missing required fields: team name, email, and team members are required'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Invalid email address'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('team_registrations')
      .insert({
        team_name: teamName,
        email: email,
        phone: phone,
        team_members: teamMembers,
        project_idea: projectIdea,
        status: 'pending'
      })
      .select()
      .single();

    if (error) {
      // Check for duplicate email
      if (error.code === '23505') {
        return new Response(JSON.stringify({
          success: false,
          error: 'This email is already registered. Contact us if you need to update your registration.'
        }), {
          status: 409,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      console.error('Supabase error:', error);
      return new Response(JSON.stringify({
        success: false,
        error: 'Failed to save registration. Please try again.'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Success - redirect to thank you page
    return new Response(null, {
      status: 302,
      headers: {
        'Location': '/join/success'
      }
    });

  } catch (err) {
    console.error('Registration error:', err);
    return new Response(JSON.stringify({
      success: false,
      error: 'An unexpected error occurred'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
