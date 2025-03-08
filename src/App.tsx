import React from 'react';
import { Dashboard } from './Pages/Dashboard';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/' element={<Navigate to="/signin" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



