import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface RequestBody {
  contactName: string
  email: string
  websiteIdeas: string
}

export async function POST(request: NextRequest) {
  try {
    const body: RequestBody = await request.json()

    const { contactName, email, websiteIdeas } = body

    if (!contactName || !email || !websiteIdeas) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    const smtpHost = process.env.ZOHO_SMTP_HOST
    const smtpUser = process.env.ZOHO_SMTP_USER
    const smtpPass = process.env.ZOHO_SMTP_PASS
    const businessEmail = 'kyle@highrockieswebdesign.com'

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.error('Zoho SMTP credentials not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: 587,
      secure: false,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    // Send email to business
    await transporter.sendMail({
      from: businessEmail,
      to: businessEmail,
      replyTo: email,
      subject: `New Website Request from ${contactName}`,
      html: `
        <h2>New Website Request</h2>
        <p><strong>Contact Name:</strong> ${escapeHtml(contactName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <h3>Website Details:</h3>
        <p>${escapeHtml(websiteIdeas).replace(/\n/g, '<br>')}</p>
      `,
    })

    // Send confirmation email to user
    await transporter.sendMail({
      from: businessEmail,
      to: email,
      subject: 'Thanks for Reaching Out - Your Free Website Awaits!',
      html: `
        <h2>Thanks, ${escapeHtml(contactName)}!</h2>
        <p>We received your website request and we're excited to get started on your free custom website.</p>

        <h3>Here's What Happens Next:</h3>
        <ol>
          <li>We'll review your website ideas and vision</li>
          <li>We'll design a beautiful, custom website tailored to your business</li>
          <li>You'll get a free website that's 100% yours</li>
          <li>After launch, we'll manage it for $59/month (hosting & unlimited edits included!)</li>
        </ol>

        <p><strong>The Best Part?</strong> You won't have to lift a finger! Once you're a subscriber, you can call anytime with edits or questions.</p>

        <p>Look for us to reach out within 24 hours!</p>

        <p>Thanks,<br>
        High Rockies Web Design</p>
      `,
    })

    return NextResponse.json(
      { message: 'Thank you for your submission! Check your email for confirmation. We\'ll be in touch within 24 hours.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Form submission error:', error)

    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    )
  }
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}
