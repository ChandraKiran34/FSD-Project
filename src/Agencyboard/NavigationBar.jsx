// NavigationBar.js

import React, { useState } from 'react';
import { Link ,useLocation} from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { LayoutDashboard } from 'lucide-react';
import { FaRegCalendarCheck } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa6';
import { RxUpdate } from 'react-icons/rx';
import { FaEdit } from "react-icons/fa";
import { FaHome } from 'react-icons/fa';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

function NavigationBar() {
  const location = useLocation();
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(true);

  const navLinks = [
    {
      name: 'Dashboard',
      icon: LayoutDashboard,
      path: '/agencydashboard/',
    },
    {
      name: 'Bookings',
      icon: FaRegCalendarCheck,
      path: '/agencydashboard/bookings',
    },
    {
      name: 'Edit',
      icon: FaEdit,
      path: '/agencydashboard/updateprofile',
    },
    {
      name: 'Home',
      icon: FaHome,
      path: '/',
    },
  ];

  const variants = {
    expanded: { width: '20%'},
    nonExpanded: { width: '5%'},
  };

  return (
    <motion.div
      animate={isExpanded ? 'expanded' : 'nonExpanded'}
      variants={variants}
      className={
        'px-10 py-12 flex flex-col bg-[#4B5320] text-white border border-r-1 w-1/3  relative h-screen' +
        (isExpanded ? ' px-10' : ' px-2')
      }
    >
      {/* <div className="logo-div flex space-x-3 items-center">
        <FaUserAlt />
        <span className={isExpanded ? 'block' : 'hidden'}>Chandra Kiran</span>
      </div> */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-5 h-5 bg-[#302300] rounded-full absolute -right-[10.5px] top-12 flex justify-center items-center cursor-pointer"
      >
        <FaLongArrowAltRight className="text-white w-4 " />
      </div>
      <div className="mt-10 flex flex-col space-y-8">
        {navLinks.map((item, index) => (
          <Link
          key={index}
          to={item.path}
          className={
            'flex space-x-2 p-2 rounded cursor-pointer hover:opacity-80' +
            (location.pathname === item.path
              ? ' bg-[#4D595F]  text-white font-semibold'
              : '')
          }
        >
          <item.icon />
          <span className={isExpanded ? 'block' : 'hidden'}> {item.name} </span>
        </Link>
        
        ))}
      </div>
    </motion.div>
  );
}

export default NavigationBar;
