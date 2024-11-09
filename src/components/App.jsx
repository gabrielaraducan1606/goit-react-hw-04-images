import React, { useContext } from 'react';
import { ImageContext } from './imageContext';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

function App() {
  const { loading, images, modalImage, handleLoadMore } = useContext(ImageContext);

  return (
    <div className="App">
      <Searchbar />
      <ImageGallery />

      {loading && <Loader />}

      {images.length > 0 && !loading && <Button onClick={handleLoadMore} />}

      {modalImage && <Modal />}
    </div>
  );
}

export default App;
