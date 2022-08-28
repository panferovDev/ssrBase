import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';

export default function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}
