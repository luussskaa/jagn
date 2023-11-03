import "./styles.css";

import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import App from './App';
import NewNote from "./NewNote";
import ViewNote from "./ViewNote";
import Edit from "./Edit";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/create',
    element: <NewNote />,
  },
  {
    path: '/:id/read',
    element: <ViewNote />
  },
  {
    path: '/:id/edit',
    element: <Edit />,
  }])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)