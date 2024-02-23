import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/main';
import CompaniesPage from '../pages/companies';
import AddCompany from '../pages/companies/add';
import DashboardPage from '../pages/dashboard';
import NotFoundPage from '../pages/notFound';

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
        path: 'companies/add',
        element: <AddCompany />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default PageRouters;
