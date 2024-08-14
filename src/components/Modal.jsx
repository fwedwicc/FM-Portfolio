import React, { useState, useEffect } from 'react';
import Button from './Button';

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
    <div
      className={`fixed inset-0 flex items-center justify-center bg-base bg-opacity-70 z-50 transition-opacity duration-300 ease-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
    >
      <div
        className={`bg-base backdrop-blur-md border border-[#59568fbd]/20 rounded-lg md:p-6 p-4 max-w-sm text-center transform transition-transform duration-300 ease-out ${isOpen ? 'scale-100' : 'scale-95'
          }`}
      >
        <p className="mb-6">
          This portfolio shines on larger screens, <br /> consider switching for a better view.
        </p>
        <Button text={'Got it'}
          onClick={closeModal}
        >
        </Button>
      </div>
    </div>
  );
};

export default Modal;
