import React, { useContext } from 'react';
import { ImageContext } from '../imageContext';
import styles from './Button.module.css';

export default function Button() {
  const { handleLoadMore } = useContext(ImageContext);

  return (
    <button type="button" className={styles.buttonLoad} onClick={handleLoadMore}>
      Load more
    </button>
  );
}
