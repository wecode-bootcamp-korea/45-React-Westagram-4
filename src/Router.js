import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginYoohyun from './pages/yoohyunMoon/Login/Login';
import MainYoohyun from './pages/yoohyunMoon/Main/Main';
import LoginSoobin from './pages/soobinLee/Login/Login';
import MainSoobin from './pages/soobinLee/Main/Main';
import LoginSeungbeom from './pages/seungbeomJeon/Login/Login';
import MainSeungbeom from './pages/seungbeomJeon/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-yoohyun" element={<LoginYoohyun />} />
        <Route path="/main-yoohyun" element={<MainYoohyun />} />
        <Route path="/login-soobin" element={<LoginSoobin />} />
        <Route path="/main-soobin" element={<MainSoobin />} />
        <Route path="/login-seungbeom" element={<LoginSeungbeom />} />
        <Route path="/main-seungbeom" element={<MainSeungbeom />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
