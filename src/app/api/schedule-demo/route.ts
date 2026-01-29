import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend - will gracefully handle missing API key
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

interface DemoRequestBody {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  date: string;
  time: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: DemoRequestBody = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.date || !body.time) {
      return NextResponse.json(
        { error: 'Name, email, date, and time are required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Check if Resend is configured
    if (!resend) {
      console.warn('RESEND_API_KEY not configured - email not sent');
      // Still return success in development
      return NextResponse.json({
        success: true,
        message: 'Demo request received (email sending not configured)',
        data: body,
      });
    }

    // Send email notification
    const { data, error } = await resend.emails.send({
      from: 'StaySmart Demo <no-reply@ravindrachoudhary.in>',
      to: ['dev@ravindrachoudhary.in'],
      replyTo: body.email,
      subject: `New Demo Request from ${body.name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Demo Request</title>
          </head>
          <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #334155; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%); padding: 30px; border-radius: 16px 16px 0 0; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">🗓️ New Demo Request</h1>
            </div>
            
            <div style="background: #ffffff; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 16px 16px;">
              <h2 style="color: #1e293b; margin-top: 0;">Contact Details</h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #64748b; width: 120px;">Name</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${body.name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #64748b;">Email</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${body.email}" style="color: #3b82f6; text-decoration: none;">${body.email}</a></td>
                </tr>
                ${body.phone ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #64748b;">Phone</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0;"><a href="tel:${body.phone}" style="color: #3b82f6; text-decoration: none;">${body.phone}</a></td>
                </tr>
                ` : ''}
                ${body.company ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #64748b;">Company</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b;">${body.company}</td>
                </tr>
                ` : ''}
              </table>
              
              <h2 style="color: #1e293b; margin-top: 30px;">Preferred Schedule</h2>
              <div style="background: #f8fafc; padding: 20px; border-radius: 12px; display: flex; gap: 20px;">
                <div style="flex: 1;">
                  <p style="margin: 0; color: #64748b; font-size: 14px;">📅 Date</p>
                  <p style="margin: 5px 0 0; color: #1e293b; font-weight: 600; font-size: 18px;">${new Date(body.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
                <div style="flex: 1;">
                  <p style="margin: 0; color: #64748b; font-size: 14px;">🕐 Time</p>
                  <p style="margin: 5px 0 0; color: #1e293b; font-weight: 600; font-size: 18px;">${body.time}</p>
                </div>
              </div>
              
              ${body.message ? `
              <h2 style="color: #1e293b; margin-top: 30px;">Additional Notes</h2>
              <div style="background: #f8fafc; padding: 20px; border-radius: 12px;">
                <p style="margin: 0; color: #475569; white-space: pre-wrap;">${body.message}</p>
              </div>
              ` : ''}
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; color: #94a3b8; font-size: 14px;">
                <p>This email was sent from the StaySmart website contact form.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Demo request submitted successfully',
      emailId: data?.id,
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
