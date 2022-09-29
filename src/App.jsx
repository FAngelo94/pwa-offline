import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import {Home, Profile, Explore, Cart, Section, Details} from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/section/:idsection" element={<Section />} />
        <Route path="/details/:iddetails" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
