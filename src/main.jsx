import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Root from './component/root/Root.jsx';
import Home from './home/Home.jsx';
import Registration from './registration/Registration';
import Login from './login/Login';
import HeroRegister from './registration/HeroRegister';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children :[
      {
        path:"/",
        element:<Home></Home>
    },
     
      {
        path:"/registration",
        element:<Registration></Registration>
    },
      {
        path:"/login",
        element:<Login></Login>
    },
      {
        path:"/heroregister",
        element:<HeroRegister></HeroRegister>
    },
      
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
