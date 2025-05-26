import React from 'react'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router'
// Navbar and footer:
import Navbar_component from '../components/Navbar_component'
import Footer_component from '../components/Footer_component'
// All pages:
import Home_page from '../pages/Home_page'
import Login_page from '../pages/Login_page'
import SignUp_page from '../pages/SignUp_page'
import BMI_page from '../pages/BMI_page'
import About_page from '../pages/About_page'


function Layout() {
  return (
    <>
      <Navbar_component />
      <Outlet />
      <Footer_component />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home_page /> },
      { path: 'about', element: <About_page /> },
      { path: 'login', element: <Login_page /> },
      { path: 'bmi', element: <BMI_page /> },
      { path: 'signup', element: <SignUp_page /> },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
