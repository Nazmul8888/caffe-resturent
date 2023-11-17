import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../components/Pages/Home/Home";
import OurMenu from "../components/Menu/OurMenu";
import OurShop from "../components/OurShop/OurShop";
import Login from "../components/Pages/SharedPage/Login/Login";
import SignUp from "../components/Pages/SharedPage/SignUp/SignUp";
import PrivateRoute from "../Provider/PrivateRoute";
import Secret from "../Provider/Secret/Secret";
import Dashboard from "../components/Layout/Dashboard/Dashboard";
import Cart from "../components/Layout/Dashboard/Cart/Cart";
import AllUser from "../components/Layout/Dashboard/AllUser/AllUser";
import AddItems from "../components/Layout/Dashboard/AddItems/AddItems";
import AdminRoute from "../components/Hoks/Axios/adminRoute";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'menu',
            element: <OurMenu></OurMenu>
        },
        {
          path:'ourShop/:category',
          element: <OurShop></OurShop>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signUp',
          element: <SignUp></SignUp>
        },
        {
          path: 'secret',
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
      
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children:[
        {
          path: 'cart',
          element: <Cart></Cart>
        },
        // admin side
        {
          path: 'addItems',
          element: <AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path: 'users',
          element: <AdminRoute><AllUser></AllUser></AdminRoute>
        }
      ]
    }
  ]);