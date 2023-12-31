import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import Emperors from './Emperors';
import EmperorProfile from './EmperorProfile';
import EmperorForm from './EmperorForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/emperors",
    element: <Emperors />
  },
  {
    path: "/emperorprofile/:id",
    element: <EmperorProfile />
  },
  {
    path: "/emperorform",
    element: <EmperorForm />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
