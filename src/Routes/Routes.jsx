import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/SignUp/Login";
import Signup from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home/Home";
import PopularClass from "../Pages/Home/PopularClass/PopularClass";
import Instructors from "../Pages/Instructors/Instructors";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <Signup></Signup>
        },
        {
          path: 'classes',
          element: <PopularClass></PopularClass>
        },
        {
          path: 'instructors',
          element: <Instructors></Instructors>
        },
        {
          path: 'dashboard',
          element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
        }
      ]
    },
   
  ]);