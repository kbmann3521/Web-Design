import nodemailer from 'nodemailer'
import { NextRequest, NextResponse } from 'next/server'

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

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const businessEmail = process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'kylemann90@gmail.com'

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: businessEmail,
      subject: `New Website Request`,
      html: `
        <h2>New Website Request</h2>
        <p><strong>Contact Name:</strong> ${escapeHtml(contactName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <h3>Website Details:</h3>
        <p>${escapeHtml(websiteIdeas).replace(/\n/g, '<br>')}</p>
      `,
    })

    await transporter.sendMail({
      from: process.env.SMTP_USER,
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
        Steamboat Web Design</p>
      `,
    })

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email sending error:', error)

    return NextResponse.json(
      { error: 'Failed to send email' },
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
