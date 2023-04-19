import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import LoginYoohyun from './pages/yoohyunMoon/Login/LoginYoohyun';
import MainYoohyun from './pages/yoohyunMoon/Main/MainYoohyun';
import LoginSoobin from './pages/soobinLee/Login/LoginSoobin';
import MainSoobin from './pages/soobinLee/Main/MainSoobin';
import LoginSeungbeom from './pages/seungbeomJeon/Login/LoginSeungbeom';
import MainSeungbeom from './pages/seungbeomJeon/Main/MainSeungbeom';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
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
