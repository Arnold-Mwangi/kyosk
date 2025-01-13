import { NextResponse } from 'next/server';

const API_URL = process.env.BACKEND_API_URL || 'http://localhost:8080/kyosk/api/v1/books';

export async function GET() {
  try {
    const res = await fetch(API_URL, { next: { revalidate: 60 } });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching books:', error);
    if (error instanceof Error && 'code' in error && error.code === 'ECONNREFUSED') {
      return NextResponse.json({ error: 'Backend server is not accessible' }, { status: 503 });
    }
    return NextResponse.json({ error: 'Failed to fetch books' }, { status: 500 });
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
    if (error instanceof Error && 'code' in error && error.code === 'ECONNREFUSED') {
      return NextResponse.json({ error: 'Backend server is not accessible' }, { status: 503 });
    }
    return NextResponse.json({ error: 'Failed to add book' }, { status: 500 });
  }
}

