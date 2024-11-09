import React, { useContext } from 'react';
import { ImageContext } from '../imageContext';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

export default function ImageGallery() {
  const { images, openModal } = useContext(ImageContext);

  return (
    <ul className={styles.gallery}>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          onClick={openModal}
        />
      ))}
    </ul>
  );
}
