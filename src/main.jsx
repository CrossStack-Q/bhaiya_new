import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Product from './components/product/Product';
import Enquiry from './components/enquiry/Enquiry';
import Contact from './components/contact/Contact';
import About from './components/About/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "home",
        element: <Main />,
      },
      {
        path: "products",
        element: <Product />
      },
      {
        path: "enquiry",
        element: <Enquiry />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "about",
        element: <About />
      }
    ]
  }]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

