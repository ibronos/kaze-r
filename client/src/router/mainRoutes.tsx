import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import MainLayout from '../layout/main';
import { Loading } from '../components';

const HomePage = Loading(lazy(() => import('../pages/main/home')));
const About = Loading(lazy(() => import('../pages/main/about')));

const mainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Navigate to='/home' replace />
    },
    {
      path: 'home',
      element: <HomePage />
    },
    {
        path: 'about',
        element: <About />
      },
    { path: '*', element: <div>Not Found - Main</div> }
  ]
};

export default mainRoutes;
