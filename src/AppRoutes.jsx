import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage, TweetsPage } from './pages';

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
