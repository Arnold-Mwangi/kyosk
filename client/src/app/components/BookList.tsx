import { Book } from '../lib/types';

type BookListProps = {
  books: Book[];
};

const intrusiveColors = [
  'bg-orange-500',
  'bg-green-500',
  'bg-red-500',
  'bg-purple-500'
];

export default function BookList({ books }: BookListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {books.map((book, index) => (
        <div key={book.id} className="bg-gray-800 shadow-lg rounded-lg p-6 hover:bg-gray-700 transition-colors">
          <h2 className="text-xl font-bold mb-2 text-white">{book.title}</h2>
          <p className="text-gray-300 mb-2">By {book.author}</p>
          <p className={`text-sm text-black font-bold mb-2 p-1 rounded ${intrusiveColors[index % 4]}`}>
            Genre: {book.genre}
          </p>
          <p className={`text-sm text-black font-bold mb-2 p-1 rounded ${intrusiveColors[(index + 1) % 4]}`}>
            ISBN: {book.isbn}
          </p>
          <p className={`text-sm text-black font-bold mb-2 p-1 rounded ${intrusiveColors[(index + 2) % 4]}`}>
            Published: {new Date(book.publicationDate).toLocaleDateString()}
          </p>
          <p className="text-sm text-gray-300 mt-4">{book.description}</p>
        </div>
      ))}
    </div>
  );
}

