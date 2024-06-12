import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignInPage from './views/SignIn/SignInPage';
import Dashboard from './views/Dashboard/Dashboard';

// Import other page components here

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/dashboard" element={<Dashboard />} />


      {/* Define other routes here */}
    </Routes>
  );
};

export default AppRoutes;
