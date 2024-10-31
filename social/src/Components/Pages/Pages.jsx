import React from 'react';
import Home from './Home';
import Login from './Login';
import { Routes, Route } from 'react-router-dom';

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Pages;
