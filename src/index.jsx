import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import '../src/style/index.css';
import Home from './pages/Home';
import About from './pages/About';
// import Apartment from './pages/Apartment';
// import ErrorPage from './pages/ErrorPage';
import Header from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
        <Routes>
          <Route path="/Kasa" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          {/* <Route path="/apartment/:id" element={<Apartment />} /> */}
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);