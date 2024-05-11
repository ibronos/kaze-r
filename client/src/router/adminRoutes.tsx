import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import AdminLayout from '../layout/admin';
import { Loading } from '../components';

const Dashboard = Loading(lazy(() => import('../pages/admin/dashboard')));
const Settings = Loading(lazy(() => import('../pages/admin/settings')));

const adminRoutes = {
  path: '/admin',
  element: <AdminLayout />,
  children: [
    {
        path: '/admin',
        element: <Navigate to='/admin/dashboard' replace />
      },
    {
      path: 'dashboard',
      element: <Dashboard />
    },
    {
        path: 'settings',
        element: <Settings />
      },
    { path: '*', element: <div>Not Found - Admin</div> }
  ]
};

export default adminRoutes;
