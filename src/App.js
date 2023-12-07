// App.js
import React, { Children } from "react";
import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/AboutUs";
import PlanTour from "./Pages/PlanTour";
import Join from "./Pages/Join";
import Contact from "./Pages/Contact";
import "./App.css";
import UserDashBoard from "./Userboard/UserDashBoard";
import GuideDashBoard from "./Guideboard/GuideDashBoard";
import HotelDashBoard from "./Hotelboard/HotelDashBoard";
import AgencyDashBoard from "./Agencyboard/AgencyDashBoard";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import AboutUs from "./Pages/AboutUs";
import AdminDashBoard from "./Admin/AdminDashBoard";
import { AuthContexts } from "./FireBase/AuthContexts";

import PrivateRoute from "./PrivateRoutes/PrivateRoute";
import PlaceDescreption from "./Pages/PlaceDescription";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/plantour",
    element: <PlanTour />,
  },
  {
    path: "/join",
    element: <Join />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/userdashboard/*",
    element: (
      <PrivateRoute role={"user"}>
        <UserDashBoard />
      </PrivateRoute>
    ),
  },
  {
    path: "/guidedashboard/*",
    element: <GuideDashBoard />,
  },
  {
    path: "/hoteldashboard/*",
    element: <HotelDashBoard />,
  },
  {
    path: "/agencydashboard/*",
    element: <AgencyDashBoard />,
  },
  {
    path: "/admindashboard/*",
    element: <AdminDashBoard />,
  },
  {
    path: "/placedesc",
    element: <PlaceDescreption />,
  },
  {
    path:"/place/:id/:name", // Use :id as a parameter in the path
    element: <PlaceDescreption />,
  }
]);

function App() {
  return (
    <AuthContexts>
      <RouterProvider router={Router} />
    </AuthContexts>
  );
}

export default App;
