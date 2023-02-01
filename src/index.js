//Dependencies
import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';

//Components
import Header from './Components/Header'

//Pages
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import Resume from './pages/Resume';

const root = createRoot(document.getElementById("root"));

root.render(
    <HashRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<AboutMe />} />
          <Route path='contact-me' element={<ContactMe />} />
          <Route path='projects' element={<Projects />} />
          <Route path='resume' element={<Resume />} />
          <Route path='*' element={<AboutMe />} />
        </Route>
      </Routes>
    </HashRouter>
);