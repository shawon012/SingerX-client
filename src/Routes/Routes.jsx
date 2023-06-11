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
import ManageClasses from "../Pages/Dashboard/ManageClasses";
import ManageUsers from "../Pages/Dashboard/ManageUsers";
import AddAClass from "../Pages/Dashboard/AddAClass";
import MyCourses from "../Pages/Dashboard/MyCourses";
import MySelectedClasses from "../Pages/Dashboard/MySelectedClasses";
import MyEnrolledClasses from "../Pages/Dashboard/MyEnrolledClasses";
import MyPaymentHistory from "../Pages/Dashboard/MyPaymentHistory";
import Notfound from "../Pages/Notfound/Notfound";

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
        }
      ]
    },
    {
      path: "dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'manageClasses',
          element:<ManageClasses></ManageClasses>
        },
        {
          path:'manageUsers',
          element:<ManageUsers></ManageUsers>
        },
        {
          path: 'addAClass',
          element:<AddAClass></AddAClass>
        },
        {
          path: 'myCourses',
          element:<MyCourses></MyCourses>
        },
        {
          path: 'mySelectedClasses',
          element:<PrivateRoute> <MySelectedClasses></MySelectedClasses> </PrivateRoute>
        },
        {
          path: 'myEnrolledClasses',
          element:<PrivateRoute> <MyEnrolledClasses></MyEnrolledClasses> </PrivateRoute>
        },
        {
          path: 'myPaymentHistory',
          element:<PrivateRoute> <MyPaymentHistory></MyPaymentHistory> </PrivateRoute>
        }
    ]
    },
    {
        path: '*',
        element: <Notfound></Notfound>
    }
   
  ]);