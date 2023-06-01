import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TweetsPage from './pages/TweetsPage';

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/tweets" element={<TweetsPage />} />
                <Route path="*" element={<p>404 Not found</p>} />
            </Routes>
        </div>
    );
};

export default AppRoutes;
