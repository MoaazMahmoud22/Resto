import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose?: () => void;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({ children, open, onClose = () => {}, className = '' }) => {
  const dialog = useRef<HTMLDialogElement>(null); // Default to null

  useEffect(() => {
    const modal = dialog.current;
    if (modal) { // Handle potential null reference
      if (open) {
        modal.showModal();
      } else {
        modal.close(); // Close on unmount as well
      }
    }

    return () => modal?.close(); // Optional chaining for better safety
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.body
    
  );
};

export default Modal;
