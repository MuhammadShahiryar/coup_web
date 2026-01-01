import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e5f2fe]">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-[#007AFF] mb-4">404</h1>
        <h2 className="text-2xl font-bold text-[#1d2026] mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-[#007AFF] text-white rounded-full font-semibold hover:bg-[#0056b3] transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
