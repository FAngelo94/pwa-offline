import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import {Home, Profile, Explore, Cart, Section, Details, PageNotFound} from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/section" element={<Section />} />
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
