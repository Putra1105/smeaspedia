import React from 'react';
import Nav from '../component/Navbar/Nav.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" />
      </Routes>
    </Router>
  );
};

export default Home;
