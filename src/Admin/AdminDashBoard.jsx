import {useState} from "react";
import { Routes, Route } from "react-router-dom";
import AdminUser from "./AdminUser";
import AdminProducts from "./AdminProducts";
import Home from "../Pages/Home";
import SideBar from "./SideBar";
import AdminHome from "./AdminHome";
function AdminDashBoard() {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className="flex">
      <SideBar isExpanded={expanded} setIsExpanded={setExpanded} />
      <div className={expanded ? "max-w-[85vw]" : "max-w-[95vw]"}>
        <Routes>
          <Route path="/" element={<AdminHome />}></Route>
          <Route path="users" element={<AdminUser />} />
          <Route path="bookings" element={<AdminProducts />} />
          <Route path="logout" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminDashBoard;
