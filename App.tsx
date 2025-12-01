import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ToolsPage from './pages/ToolsPage';
import SearchPage from './pages/SearchPage';
import SongsPage from './pages/SongsPage';
import SongDetailPage from './pages/SongDetailPage';
import PrayersPage from './pages/PrayersPage';
import PrayerDetailPage from './pages/PrayerDetailPage';
import ArticlesPage from './pages/ArticlesPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import ChatPage from './pages/ChatPage';
import VersesPage from './pages/VersesPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/search" element={<SearchPage />} />
          
          <Route path="/songs" element={<SongsPage />} />
          
          <Route path="/prayers" element={<PrayersPage />} />
          
          <Route path="/articles" element={<ArticlesPage />} />
        </Route>
        
        {/* Full screen pages (outside main layout/bottom nav usually, but we keep Nav for simplicity or hide it via CSS if needed. 
            For Detail pages, keeping the Nav is often fine, but for full immersion we could hide it. 
            Here we include them in Router but outside Layout if we want to hide BottomNav, 
            OR inside Layout if we want BottomNav everywhere. 
            Prompt says "Bottom navigation... fixed at the bottom". 
            Usually detail pages cover the nav or sit above it. 
            For simplicity in this SPA, I'll put Detail pages OUTSIDE the Layout so they don't show the BottomNav, 
            giving more screen real estate, which is common in mobile apps.
        */}
        <Route path="/songs/:id" element={<SongDetailPage />} />
        <Route path="/prayers/:id" element={<PrayerDetailPage />} />
        <Route path="/articles/:id" element={<ArticleDetailPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/verses" element={<VersesPage />} />

      </Routes>
    </Router>
  );
};

export default App;
