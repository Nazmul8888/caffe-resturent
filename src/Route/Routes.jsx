import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../components/Pages/Home/Home";
import OurMenu from "../components/Menu/OurMenu";
import OurShop from "../components/OurShop/OurShop";


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
        }
      ]
      
    },
  ]);