import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { sidebarData } from './SidebarData'
import './Navbar.css';
import { IconContext } from 'react-icons'
import DateTime from './dateTime';
import './dateTime.css';


function Navbar() {
    const[sidebar, setSidebar] = useState(false);

    const showsidebar = () =>setSidebar(!sidebar);
  return (
    <>
    <IconContext.Provider value={{color: "#242F9B"}}>
    <div className="navbar">
        
        <Link to ="#" className="menu-bars">
            <FaIcons.FaBars onClick={showsidebar}/>

        </Link>
        <div className="wrapper">
        <div className='aircraft'>
        <p>INAS 310</p>
        </div>
        <div className='datetime'>
        <DateTime></DateTime>
        </div>
        </div>


    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className ="nav-menu-items" onclick={showsidebar}>
            <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                    {/* <AiIcons.AiOutlineClose /> */}
                    <img src="/logo.png" alt="logo"></img>
                </Link>
            </li>
            {sidebarData.map((item, index)=>{
                return (
                    <li key = {index} className={item.cName}>
                        <Link to = {item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </li>
                );
            })}

        </ul>
    </nav>
    </IconContext.Provider>
    </>
  );
}

export default Navbar