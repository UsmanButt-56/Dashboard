import React, { useState } from 'react'
import man from '../../assets/Ellipse 1.svg';
import Logout from '../../assets/logout.svg';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { RiDashboardFill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { BiTask } from "react-icons/bi";
import { MdHelp } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import { FaExclamation } from "react-icons/fa";

function Sidebar() {
    const [active, setActive] = useState(1);

    const handleActive = (id) => {
        setActive(id);
    }

    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/');
    }

    const sideitems = [
        {
            id: 1,
            icon: <RiDashboardFill />,
            name: "Dashboard",
            path: "/dashboard"
        },
        {
            id: 2,
            icon: <FaExclamation/>,
            name: "Vital Task",
            path: "/vital"
        },
        {
            id: 3,
            icon: <BiTask/>,
            name: "Task",
            path: "/task"
        },
        {
            id: 4,
            icon: <FaListUl/>,
            name: "Task Categories",
            path: "/category"
        },
        {
            id: 5,
            icon: <IoSettingsSharp/>,
            name: "Settings",
            path: "/settings"
        },
        {
            id: 6,
            icon: <MdHelp/>,
            name: "Help",
            path: "/help"
        },
    ]
    return (
        <div className="h-screen w-20 md:w-[335px] text-white fixed transition-all duration-10 flex flex-col">
            <div className="relative">
                <div className="absolute flex justify-center mt-1 md:mt-3 top-3 md:top-0 left-10 md:left-1/2 transform -translate-x-1/2">
                    <img src={man} alt="" className='w-30 h-30 md:w-86 md:h-86' />
                </div>
            </div>
            <div className="bg-[#FF6767] mt-10 md:mt-14 py-5 md:py-10 flex-grow flex flex-col justify-between rounded-r-md">
                <div className='flex flex-col items-center justify-center'>
                    <p className='font-semibold text-[16px] hidden md:flex'>Sundar Gurung</p>
                    <p className='font-normal text-[12px] hidden md:flex'>sundargurung360@gmail.com</p>
                </div>
                {
                    sideitems.map((item) => (
                        <NavLink to={item.path} key={item.id} className={`flex items-center justify-center md:justify-start mx-4 md:px-5 py-4 mt-4 ${active === item.id ? 'bg-white rounded-xl z-0' : 'text-white '}`} onClick={() => handleActive(item.id)} >
                            <span className={`w-[24px] h-[24px] transition-colors duration-200 ${active === item.id ? 'text-[#FF6767]' : ''}`}>
                                {typeof item.icon === 'string' ? (
                                    <img src={item.icon} alt={item.name} className="w-full h-full" />
                                ) : 
                                (
                                    React.cloneElement(item.icon, { size: 24 })
                                )}
                            </span>
                            <span className={`hidden md:flex ml-4 transition-colors duration-200 ${active === item.id ? 'text-[#FF6767]' : ''}`}>{item.name}</span>
                        </NavLink>
                    ))
                }

                <div className='flex-grow'></div>

                {/* Logout Button */}

                <div className='text-white pb-28 md:pb-20 flex mx-7 md:px-2 gap-4 cursor-pointer' onClick={handleLogout}>
                    <img src={Logout} alt="" className='w-[24px] h-[24px] ' />
                    <p className='hidden md:flex font-semibold text-[16px] leading-[19.36px]'>Logout</p>
                </div>

            </div>
            
        </div>

    )
}

export default Sidebar;