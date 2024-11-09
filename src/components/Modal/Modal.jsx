import React, { useContext, useEffect } from 'react';
import { ImageContext } from '../imageContext';
import styles from './Modal.module.css';

export default function Modal() {
  const { modalImage, closeModal } = useContext(ImageContext);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeModal]);

  if (!modalImage) return null;

  return (
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.modal}>
        <img src={modalImage.largeImageURL} alt={modalImage.tags} />
      </div>
    </div>
  );
}
