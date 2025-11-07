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

    // TODO: Integrate with SendGrid or other email provider
    // For now, just return success response

    return NextResponse.json(
      { message: 'Thank you for your submission! We will review your request soon.' },
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
