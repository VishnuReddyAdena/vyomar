import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SpaceMysteriesPage from './pages/SpaceMysteriesPage';
import WhatIfScenariosPage from './pages/WhatIfScenariosPage';
import ArticleReadingPage from './pages/ArticleReadingPage';
import CommunityPage from './pages/CommunityPage';
import DataPage from './pages/DataPage';
import HowToSubmitATheoryPage from './pages/HowToSubmitATheoryPage';
import IssuesPage from './pages/IssuesPage';
import LoginRegisterPage from './pages/LoginRegisterPage';
import PolicyPage from './pages/PolicyPage';
import PuzzlePage from './pages/PuzzlePage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/space-mysteries" element={<SpaceMysteriesPage />} />
        <Route path="/what-if-scenarios" element={<WhatIfScenariosPage />} />
        <Route path="/article-reading" element={<ArticleReadingPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/data" element={<DataPage />} />
        <Route path="/how-to-submit-a-theory" element={<HowToSubmitATheoryPage />} />
        <Route path="/issues" element={<IssuesPage />} />
        <Route path="/login-register" element={<LoginRegisterPage />} />
        <Route path="/policy" element={<PolicyPage />} />
        <Route path="/puzzle" element={<PuzzlePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;