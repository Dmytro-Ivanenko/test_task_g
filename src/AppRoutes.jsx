import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TweetsPage from './pages/TweetsPage';

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/tweets" element={<TweetsPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    );
};

export default AppRoutes;
