import React from 'react';
import { Link } from 'react-router-dom';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../component/Navbar/Nav.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Account from '../pages/Account.jsx';
import Setting from '../pages/Setting.jsx';
import Information from '../pages/Information.jsx';
import HomeContent from './home_content.jsx';

const Home = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/account" component={Account} />
        <Route path="/setting" component={Setting} />
        <Route path="/information" component={Information} />
      </Routes>
      <HomeContent />
    </Router>
  );
};

export default Home;
