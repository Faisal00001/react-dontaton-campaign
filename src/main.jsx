import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import './index.css';
import Donation from './Pages/Donation/Donation';
import DonationDetails from './Pages/DonationDetails/DonationDetails';
import DonationStatistics from './Pages/DonationStatistics/DonationStatistics';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Home from './Pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/donationDetails/:id",
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/statistics",
        element: <DonationStatistics></DonationStatistics>,
        loader: () => fetch('/data.json')
      }

    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
