import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { ImageProvider } from './components/imageContext';

ReactDOM.render(
  <ImageProvider>
    <App />
  </ImageProvider>,
  document.getElementById('root')
);
