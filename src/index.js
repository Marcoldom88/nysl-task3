import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// React Router
import { RouterProvider, createBrowserRouter, } from 'react-router-dom';
import Home  from './components/Home';
import { Schedule } from './components/Schedule';
import ErrorPage from "./error-page";
import { CreateGamesDetails } from './components/GamesDetails';
import { MessageBoard } from './components/MessageBoard';

const App = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Schedule",
        element: <Schedule />,
      },
      {
        path: "games/:id",
        element: <CreateGamesDetails/>
      },
      {
        path: "MessageBoard",
        element: <MessageBoard />,
      },
    ],
 
    
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <RouterProvider router={App} />
  </React.StrictMode>
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
