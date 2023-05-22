import { createBrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../containers/Dashboard';

const AppRoutes = () => {
    return <Routes>
        <Route path='/' element={<Dashboard />} />
    </Routes>
};

export default AppRoutes;