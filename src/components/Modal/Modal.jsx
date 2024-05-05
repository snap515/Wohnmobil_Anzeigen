import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalContent } from './Modal.styled';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ isModalOpen, onClose, children }) => {
  const closeModalOnBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const closeModalonEsc = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', closeModalonEsc);

    return () => {
      window.removeEventListener('keydown', closeModalonEsc);
    };
  }, [onClose]);

  return isModalOpen
    ? createPortal(
        <ModalBackdrop onClick={closeModalOnBackdrop}>
          <ModalContent>{children}</ModalContent>
        </ModalBackdrop>,
        modalRoot
      )
    : null;
};
