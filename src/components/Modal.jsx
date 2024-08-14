import React, { useState, useEffect } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className={`fixed inset-0 flex items-center justify-center bg-base bg-opacity-70 z-50 transition-opacity duration-300 ease-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div
          className={`bg-white rounded-lg shadow-lg p-6 max-w-sm text-center transform transition-transform duration-300 ease-out ${isOpen ? 'scale-100' : 'scale-95'
            }`}
        >
          <p className="mb-4 text-gray-700">
            Please view this portfolio on large devices for a full and better experience.
          </p>
          <button
            onClick={closeModal}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Got it
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
