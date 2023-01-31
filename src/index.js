import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Header'
import Footer from './Components/Footer'

import AboutMe from './Pages/AboutMe';
import Projects from './Pages/Projects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<AboutMe />} />
          <Route path="projects" element={<Projects />} />
          <Route path="*" element={<AboutMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);