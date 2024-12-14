import './index.css';
import App from './App';

import * as React from "react";
import { createRoot } from "react-dom/client";
import{
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Homee from './components/Homee';
import Loginn from './components/Loginn';
import Signup from './components/Signup';
const router=createBrowserRouter([
{
  path: "/",
  element:(<Homee/>),
},
{
  path: "about",
  element: <div>About</div>,
},
{
  path: "/Loginn",
  element: (<Loginn/>),
},
{
  path: "/signup",
  element: (<Signup/>),
},
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);

/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); */