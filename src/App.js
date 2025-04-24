import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Jumbotron from './components/homepage/Jumbotron';
import FormFeature from './components/FormFeature';
import Homepage from './components/homepage/Homepage';
import RecommendedProducts from './components/RecommendedProducts';
import OpenBanking from './components/OpenBanking';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <Homepage />
          } />
          <Route path="/form-feature" element={<FormFeature />} />
          <Route path="/recommended-products" element={<RecommendedProducts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
