import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";
import * as ImIcons from "react-icons/im";
import * as GrIcons from "react-icons/gr";
import * as BsIcons from "react-icons/bs";
import * as TbIcons from "react-icons/tb";
import * as MdIcons from "react-icons/md";
export const sidebarData = [
    {
        title:'Dashboard',
        path:'/',
        icon: <RiIcons.RiDashboardFill />,
        cName: 'nav-text'

    },
    {
        title:'Aircraft State',
        path:'/Aircraftstatus',
        icon: <GiIcons.GiCommercialAirplane />,
        cName: 'nav-text'

    },
    {
        title:'Flying Program',
        path:'/FlyingProgram',
        icon: <RiIcons.RiMiniProgramFill />,
        cName: 'nav-text'

    },
    {
        title:'Eauthobook',
        path:'/Eauthobook',
        icon: <ImIcons.ImBook />,
        cName: 'nav-text'

    },
    {
        title:'Aircraft Maintenance',
        path:'/AircraftMaintenance',
        icon: <MdIcons.MdMiscellaneousServices />,
        cName: 'nav-text'

    },
    {
        title:'Crew Details',
        path:'/crewDetails',
        icon: <IoIcons.IoIosPeople/>,
        cName: 'nav-text'

    },
    {
        title:'Reports/Returns',
        path:'/Reportsreturns',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text'

    },
    {
        title:'My page',
        path:'/Mypage',
        icon: <FaIcons.FaHouseUser />,
        cName: 'nav-text'

    }
];