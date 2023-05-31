import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import AddAToy from "../../components/AddAToy/AddAToy";
import AllToys from "../../components/AllToys/AllToys";
import Blogs from "../../components/Blogs/Blogs";
import Home from "../../components/Home/Home/Home";
import Partner from "../../components/Home/Partner/Partner";
import Video from "../../components/Home/Video/Video";
import Login from "../../components/Login/Login";
import MyToys from "../../components/MyToys/MyToys";
import NoData from "../../components/NoData/NoData";
import Register from "../../components/Register/Register";
import ToyDetail from "../../components/ToyDetail/ToyDetail";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Edit from "../../components/Edit/Edit";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/allToys/:id",
        element: (
          <PrivateRoute>
            <ToyDetail />
          </PrivateRoute>
        ),
        loader: async({params}) => 
          await fetch(`https://lego-land-seven.vercel.app/toys/${params.id}`) 
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Edit />
          </PrivateRoute>
        ),
        loader: async({params}) => 
          await fetch(`https://lego-land-seven.vercel.app/toys/${params.id}`) 
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/addAToy",
        element: (
          <PrivateRoute>
            <AddAToy></AddAToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/partner",
        element: <Partner></Partner>,
      },
      {
        path: "/video",
        element: <Video></Video>,
      },
    ],
  },
  {
    path: "*",
    element: <NoData></NoData>,
  },
]);
