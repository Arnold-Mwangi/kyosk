import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-800 text-white p-4 shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Book Management</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-gray-300 transition-colors">Home</Link></li>
            <li><Link href="/add-book" className="hover:text-gray-300 transition-colors">Add Book</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
