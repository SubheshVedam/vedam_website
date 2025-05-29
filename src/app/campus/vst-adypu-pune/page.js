'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function VSTADYPUPune() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Show modal as soon as page loads
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Redirect to home page after closing
    router.push('/');
  };

  return (
    <>
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-4xl p-4 rounded-lg shadow-lg relative">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
              aria-label="Close"
            >
              ×
            </button>
            <iframe
              src="https://drive.google.com/file/d/1zJzM9ZOPsJzP5bhZsCRB5xWlho3iAGwt/preview"
              width="100%"
              height="600"
              allow="autoplay"
              className="rounded"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
