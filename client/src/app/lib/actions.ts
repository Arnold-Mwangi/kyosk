'use server'

import { Book } from './types';

const API_URL = process.env.BACKEND_API_URL || 'http://server:8080/kyosk/api/v1/books';

export async function getBooks(): Promise<Book[]> {
  const res = await fetch(API_URL, { cache: 'no-store' });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || `HTTP error! status: ${res.status}`);
  }
  const data = await res.json();
  if (!Array.isArray(data)) {
    throw new Error('Invalid data format received from API');
  }
  return data;
}

export async function addBook(book: Omit<Book, 'id' | 'createdAt' | 'updatedAt'>): Promise<Book> {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || 'Failed to add book');
  }

  return res.json();
}

