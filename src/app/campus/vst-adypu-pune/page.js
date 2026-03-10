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
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{
            background: "rgba(17, 10, 33, 0.44)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            padding: "16px",
          }}
        >
          <div
            className="glass-modal-shell"
            style={{
              width: "100%",
              maxWidth: "960px",
              padding: "16px",
              position: "relative",
              borderRadius: "24px",
            }}
          >
            <button
              onClick={handleClose}
              className="glass-icon-button"
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                color: "#2A135B",
                width: "34px",
                height: "34px",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.4)",
                cursor: "pointer",
              }}
              aria-label="Close"
            >
              ×
            </button>
            <iframe
              src="https://drive.google.com/file/d/1zJzM9ZOPsJzP5bhZsCRB5xWlho3iAGwt/preview"
              width="100%"
              height="600"
              allow="autoplay"
              className="glass"
              style={{
                borderRadius: "18px",
                border: "1px solid rgba(255,255,255,0.4)",
              }}
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
