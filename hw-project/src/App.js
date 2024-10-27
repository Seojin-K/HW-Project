import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Features from './pages/Features';
import './App.css'

function App() {
  return (
    <Router>
      <div className="navbar">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Calendar" element={<Calendar />} />
            <Route path="/Features" element={<Features />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;