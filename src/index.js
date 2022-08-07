import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import BooksProvider from './BooksProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BooksProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BooksProvider>
);