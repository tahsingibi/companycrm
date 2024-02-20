import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/main';
import { CompaniesPage, DashboardPage, NotFoundPage } from '../pages';

const PageRouters = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <DashboardPage />,
      },
      {
        path: 'companies',
        element: <CompaniesPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default PageRouters;
