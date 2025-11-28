import type { APIRoute } from 'astro';
import { supabase } from '@/lib/supabase';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();

    const name = formData.get('name')?.toString();
    const email = formData.get('email')?.toString();
    const company = formData.get('company')?.toString() || null;
    const phone = formData.get('phone')?.toString() || null;
    const inquiryType = formData.get('inquiry-type')?.toString() || 'donation';
    const amount = formData.get('amount')?.toString() || null;
    const message = formData.get('message')?.toString() || null;

    // Validation
    if (!name || !email) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Name and email are required'
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Insert into Supabase
    const { error } = await supabase
      .from('donation_inquiries')
      .insert({
        name,
        email,
        company,
        phone,
        inquiry_type: inquiryType,
        amount,
        message,
        status: 'new'
      });

    if (error) {
      console.error('Supabase error:', error);
      return new Response(JSON.stringify({
        success: false,
        error: 'Failed to save inquiry. Please try again.'
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(null, {
      status: 302,
      headers: {
        'Location': '/donate/success'
      }
    });

  } catch (err) {
    console.error('Donation inquiry error:', err);
    return new Response(JSON.stringify({
      success: false,
      error: 'An unexpected error occurred'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
