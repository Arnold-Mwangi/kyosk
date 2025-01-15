import { getBooks } from './lib/actions';
import BookList from './components/BookList';
import Link from 'next/link';

export default async function Home() {
  try {
    const books = await getBooks();

    return (
      <div className="space-y-8 pb-16">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">Book Collection</h1>
        <BookList books={books} />
      </div>
    );
  } catch (error) {
    console.error('Error fetching books:', error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    
    return (
      <div className="space-y-8 pb-16">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">Book Collection</h1>
        <div className="bg-red-600 text-white px-4 py-3 rounded-lg" role="alert">
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline"> {errorMessage}</span>
          <p className="mt-2 text-sm">
            Please ensure that your backend server is running at {process.env.BACKEND_API_URL || 'http://localhost:8080/kyosk/api/v1/books'}.
            <br />
            <Link href="/setup-instructions" className="underline">View setup instructions</Link>
          </p>
        </div>
      </div>
    );
  }
}

