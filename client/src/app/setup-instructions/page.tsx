export default function SetupInstructions() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Setup Instructions</h1>
        <ol className="list-decimal list-inside space-y-4">
          <li>
            Ensure your backend server is running at&nbsp;
            <code className="bg-green-600 px-2 py-1 rounded">
              {process.env.BACKEND_API_URL || 'http://localhost:8080/kyosk/api/v1/books'}
            </code>
          </li>
          <li>
            If your backend server is running on a different URL, set the <code className="bg-red-600 px-2 py-1 rounded">BACKEND_API_URL</code> environment variable in your <code className="bg-yellow-700 px-2 py-1 rounded">.env.local</code> file:
            <pre className="bg-orange-700 p-2 mt-2 rounded">
              BACKEND_API_URL=http://your-backend-url.com/api
            </pre>
          </li>
          <li>
            Restart your Next.js development server after making changes to the <code className="bg-blue-600 px-2 py-1 rounded">.env.local</code> file.
          </li>
          <li>
            If you&apos;re still experiencing issues, check your backend server logs for any errors.
          </li>
        </ol>
      </div>
    );
  }
  