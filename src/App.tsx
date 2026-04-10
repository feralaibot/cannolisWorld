import { Navigate, Route, Routes } from 'react-router-dom';
import { SiteLayout } from './components/SiteLayout';
import { ROUTES } from './lib/site';
import { ComicPage } from './pages/ComicPage';
import { CommunityPage } from './pages/CommunityPage';
import { HomePage } from './pages/HomePage';
import { TradingCardsPage } from './pages/TradingCardsPage';
import { DrawYourOwnCannoliPage } from './pages/DrawYourOwnCannoliPage';

export default function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path={ROUTES.home} element={<HomePage />} />
        <Route path={ROUTES.comic} element={<ComicPage />} />
        <Route path={ROUTES.tradingCards} element={<TradingCardsPage />} />
        <Route path={ROUTES.community} element={<CommunityPage />} />
        <Route path={ROUTES.draw} element={<DrawYourOwnCannoliPage />} />
        <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
      </Routes>
    </SiteLayout>
  );
}
