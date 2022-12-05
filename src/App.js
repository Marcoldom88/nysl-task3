import React from 'react';
import './App.css';
import {  createBrowserRouter,  RouterProvider,  Route, } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import { Schedule } from './components/Schedule';



const App = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "./components/Home",
        element: <Home />,
      },
    ],
  }
])
  
export default App;
