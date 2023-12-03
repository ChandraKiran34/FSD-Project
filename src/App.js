// App.js

import React, { Children } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import PlanTour from "./Pages/PlanTour";
import Join from "./Pages/Join";
import Contact from "./Pages/Contact";
import "./App.css";
import Footer from "./Components/Footer";

// import UserDashBoard from './Userboard/UserDashBoard';
import UserDashBoard from "./Userboard/UserDashBoard";
import GuideDashBoard from "./Guideboard/GuideDashBoard";
import HotelDashBoard from "./Hotelboard/HotelDashBoard";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/plantour",
    element: <PlanTour />,
  },
  {
    path: "/join",
    element: <Join/>,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path:'/userdashboard/*',
    element:<UserDashBoard />
  },
  {
    path:'/guidedashboard/*',
    element:<GuideDashBoard />
  },
  {
    path:'/hoteldashboard/*',
    element:<HotelDashBoard />
  }
]);

function App() {
  return (
    //
    //
    //     <Route  />
    //     <Route path="/plantour" element={<PlanTour />} />
    //     <Route path="/join" element={<Join />} />
    //     <Route path="/contact" element={<Contact />} />
    //     <Route path="/userdashboard/*" element={<UserDashBoard />} />
    //     <Route path="/guidedashboard/*" element={<GuideDashBoard />} />
    //     <Route path="/hoteldashboard/*" element={<HotelDashBoard />} />
    //

    <RouterProvider router={Router} />
  );
}

export default App;

{
  /* <Route path="/" element={<Root />}>
      <Route path="/" element={<Home />}>
        <Route index element={<HomePage />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contactus" element={<ContactUs_Home />} />
      </Route>
      <Route path="/login" element={<Login_SignUp />} />

      <Route path="/jobseeker" element={<JobSeeker />}>
        <Route index element={<JLanding />} />
        <Route path="findjobs" element={<FindJobs />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="profile" element={<Profile_Job />} />
      </Route>

      <Route path="/company" element={<Company />} />
    </Route> */
}
