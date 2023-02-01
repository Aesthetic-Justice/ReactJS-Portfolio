//Dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import Header from './Components/Header'
import Footer from './Components/Footer'

//Pages
import AboutMe from './Pages/AboutMe';
import Projects from './Pages/Projects';
import ContactMe from './Pages/ContactMe';
import Resume from './Pages/Resume';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<AboutMe />} />
          <Route path='contact-me' element={<ContactMe />} />
          <Route path='projects' element={<Projects />} />
          <Route path='resume' element={<Resume />} />
          <Route path='*' element={<AboutMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);