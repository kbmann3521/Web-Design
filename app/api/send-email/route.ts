import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

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

    const apiKey = process.env.BREVO_API_KEY
    const businessEmail = 'kyle@highrockieswebdesign.com'

    if (!apiKey) {
      console.error('BREVO_API_KEY not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Send email to business
    const adminEmailResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: [{ email: businessEmail }],
        sender: { name: contactName, email: email },
        subject: `New Website Request from ${contactName}`,
        htmlContent: `
          <h2>New Website Request</h2>
          <p><strong>Contact Name:</strong> ${escapeHtml(contactName)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <h3>Website Details:</h3>
          <p>${escapeHtml(websiteIdeas).replace(/\n/g, '<br>')}</p>
        `,
      }),
    })

    if (!adminEmailResponse.ok) {
      console.error('Failed to send admin email:', await adminEmailResponse.text())
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    // Send confirmation email to user
    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: [{ email: email }],
        sender: { name: 'High Rockies Web Design', email: businessEmail },
        subject: 'Thanks for Reaching Out - Your Free Website Awaits!',
        htmlContent: `
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
      }),
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
