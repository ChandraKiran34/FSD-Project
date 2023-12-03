// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import PlanTour from './Pages/PlanTour';
import Join from './Pages/Join';
import Contact from './Pages/Contact';
import './App.css'
import Footer from './Components/Footer';
// import UserDashBoard from './Userboard/UserDashBoard';
import UserDashBoard from './Userboard/UserDashBoard';
import GuideDashBoard from './Guideboard/GuideDashBoard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/plantour" element={<PlanTour />} />
        <Route path="/join" element={<Join />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/userdashboard/*" element={<UserDashBoard />} />
        <Route path="/guidedashboard/*" element={<GuideDashBoard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;




{/* <Route path="/" element={<Root />}>
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
    </Route> */}
