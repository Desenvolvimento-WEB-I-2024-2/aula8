// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Importação correta
import { AuthProvider } from './AuthContext';
import App from './App';
import './theme.css'; // Importe o tema
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Criação do root
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
