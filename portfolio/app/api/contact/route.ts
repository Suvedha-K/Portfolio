import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // 1. Capture the form inputs including your new subject field
    const { name, email, subject, message } = await request.json();

    // 2. Safely read the URL from your .env file
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

    if (!GOOGLE_SCRIPT_URL) {
      console.error("Missing GOOGLE_SCRIPT_URL in environment variables.");
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // 3. Forward the full data payload to your Google Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, subject, message }),
    });

    if (response.ok) {
      return NextResponse.json({ message: 'Success' }, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Failed to forward message' }, { status: 500 });
    }
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}