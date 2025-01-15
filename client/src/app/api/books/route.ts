import { NextResponse } from 'next/server';
import { getErrorMessage } from '../../lib/utils';

const API_URL = process.env.BACKEND_API_URL || 'http://server:8080/kyosk/api/v1/books';

export async function GET() {
  try {
    const res = await fetch(API_URL, { next: { revalidate: 0 } });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching books:', error);
    return NextResponse.json({ error: getErrorMessage(error) }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error adding book:', error);
    return NextResponse.json({ error: getErrorMessage(error) }, { status: 500 });
  }
}

