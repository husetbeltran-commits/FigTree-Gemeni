import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ToolsPage from './pages/ToolsPage';
import SearchPage from './pages/SearchPage';
import SongsPage from './pages/SongsPage';
import SongDetailPage from './pages/SongDetailPage';
import PrayersPage from './pages/PrayersPage';
import PrayerDetailPage from './pages/PrayerDetailPage';
import BlessingsPage from './pages/BlessingsPage';
import BlessingDetailPage from './pages/BlessingDetailPage';
import ArticlesPage from './pages/ArticlesPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import VersesPage from './pages/VersesPage';
import { ThemeProvider } from './contexts/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/search" element={<SearchPage />} />
            
            <Route path="/songs" element={<SongsPage />} />

            <Route path="/prayers" element={<PrayersPage />} />
            <Route path="/blessings" element={<BlessingsPage />} />

            <Route path="/articles" element={<ArticlesPage />} />
          </Route>

          <Route path="/songs/:id" element={<SongDetailPage />} />
          <Route path="/prayers/:id" element={<PrayerDetailPage />} />
          <Route path="/blessings/:id" element={<BlessingDetailPage />} />
          <Route path="/articles/:id" element={<ArticleDetailPage />} />
          <Route path="/verses" element={<VersesPage />} />

        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
