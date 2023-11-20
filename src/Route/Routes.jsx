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
import ManageItems from "../components/Layout/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../components/Layout/Dashboard/Update/UpdateItem";
import Payment from "../components/Layout/Dashboard/Payment/Payment";


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
        // normal user side
        {
          path: 'cart',
          element: <Cart></Cart>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },

        // admin side
        {
          path: 'addItems',
          element: <AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path: 'manageItems',
          element: <ManageItems></ManageItems>
        },
        {
          path: 'updateItem/:id',
          element: <UpdateItem></UpdateItem>,
          loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        },
        {
          path: 'user',
          element: <AdminRoute><AllUser></AllUser></AdminRoute>
        }
      ]
    }
  ]);