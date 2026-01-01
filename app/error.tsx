'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e5f2fe]">
      <div className="text-center px-4">
        <h2 className="text-2xl font-bold text-[#1d2026] mb-4">
          Something went wrong!
        </h2>
        <p className="text-gray-600 mb-6">
          We encountered an unexpected error. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-[#007AFF] text-white rounded-full font-semibold hover:bg-[#0056b3] transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
