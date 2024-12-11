import React, { useState } from 'react'
import searchicon from '../../assets/Search.svg';
import bellicon from '../../assets/Bell.svg';
import calendaricon from '../../assets/Calendar.svg';
import Arrow from '../../assets/Mask group.svg';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import Food from '../../assets/FoodVentures.svg';
import TravelDays from '../../assets/TravelDays.svg';
import Mobile from '../../assets/MobileDesign.svg';
function Navbar({heading , subHeading}) {
    const [showNotification, setShowNotification] = useState(false);
    const toggleNotification = () => {
        setShowNotification(!showNotification);
    }
    const closeNotification = () => {
        setShowNotification(false);
    }
    const Notification =
        [
            {
                id: 1,
                text: (<> Complete the <strong>UI design </strong>of Landing Page for <strong>FoodVentures</strong> </>),
                time: "2h",
                img: Food,
                priority: "High"
            },
            {
                id: 2,
                text: (<> Complete the <strong>UI design </strong>of Landing Page for <strong>TravelDays</strong> </>),
                time: "2h",
                img: TravelDays,
                priority: "High"
            },
            {
                id: 3,
                text: (<> Complete the <strong>Mobile app Design </strong>of Landing Page for <strong>Pet Warden.</strong> </>),
                time: "2h",
                img: Mobile,
                priority: "Extremely High"
            },
            {
                id: 4,
                text: (<> Complete the <strong>Mobile app Design </strong>of Landing Page for <strong>Pet Warden.</strong> </>),
                time: "2h",
                img: Mobile,
                priority: "Extremely High"
            },
            {
                id: 5,
                text: (<> Complete the <strong>Mobile app Design </strong>of Landing Page for <strong>Pet Warden.</strong> </>),
                time: "2h",
                img: Mobile,
                priority: "Extremely High"
            },
        ]
    const [showCalendar, setShowCalendar] = useState(false);
    const toggleCalendar = () => {
        setShowCalendar(!showCalendar);
    }
    const closeCalendar = () => {
        setShowCalendar(false);
    }

    const [selectedDate, setSelectedDate] = useState(dayjs());

    const handleDateChange = (newValue) => {
        setSelectedDate(newValue);
    };

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-GB');
    const dayOfWeek = currentDate.toLocaleDateString('en-US', { weekday: 'long' });

    return (
        <div className={`fixed w-full bg-[#F8F8F8] z-50 shadow-custom-shadow`}>
            <div className="w-11/12 mx-auto py-[28px] h-[91px]">
                <div className="grid grid-cols-12 sm:grid-cols-12 md:grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 2xl:grid-cols-12  items-center">
                    <div className="col-span-6 md:col-span-3">
                        <div className='w-full h-full flex justify-start items-center text-[#FF6767] font-semibold text-2xl md:text-[32px]'>
                            {heading}
                            <span className='text-black'>{subHeading}</span>
                        </div>
                    </div>
                    <div className="col-span-6 md:col-span-6">
                        <div className=' relative flex w-full items-center'>
                            <form action="" className='w-full'>
                                <div className='relative flex items-center'>
                                    <input type="search" placeholder='Search your task here...' className='w-full h-[36px] md:h-[36px] px-5 bg-[#F5F8FF] text-[#A1A3AB] shadow-b-md rounded-md font-semibold text-[12px] shadow-custom-multi' />
                                    <div className='absolute bg-[#FF6767] h-[36px] w-[36px] flex items-center justify-center right-0 rounded-lg'>
                                        <img src={searchicon} alt="Search Icon" className="" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="md:col-span-3 hidden lg:flex">
                        <div className='w-full flex justify-end gap-x-7 relative'>
                            {/* Bell-Icon */}
                            <div className='flex gap-2 items-center'>
                                <div className=' bg-[#FF6767] h-[36px] w-[36px] flex items-center justify-center right-0 rounded-lg' onClick={toggleNotification}>
                                    <img src={bellicon} alt="Search Icon" className="" />
                                </div>
                                {/* Calendar Icon */}
                                <div className=' bg-[#FF6767] h-[36px] w-[36px] flex items-center justify-center right-0 rounded-lg' onClick={toggleCalendar}>
                                    <img src={calendaricon} alt="Search Icon" className="" />
                                </div>
                            </div>
                            {
                                showNotification && (
                                    <div className='absolute top-14 left-[-50px] w-[378px] h-[385px] border-2 rounded-xl bg-white text-black'>
                                        <div className="flex justify-between font-inter font-semibold text-[16px] leading-[19.36px] pt-6 px-7 ">
                                            <div>
                                                <p>Notifications</p>
                                            </div>
                                            <div>
                                                <img src={Arrow} alt="" onClick={closeNotification} />
                                            </div>

                                        </div>
                                        <h2 className='px-7 pb-2'>Today</h2>
                                        <div className='px-7 py-[10px] max-h-[300px] overflow-y-auto bg-[#D3D3D3]'>
                                        {
                                            Notification.map((item) => (
                                                <div className=' py-[10px] flex justify-between' key={item.id}>
                                                    <div className=' font-inter font-medium text-[15px] leading-[#26px]'>
                                                        <p>{item.text}<span>{item.time}</span></p>
                                                        <p>Priority: <span className='text-red-500'>{item.priority}</span></p>
                                                    </div>
                                                    <div className='w-[52px] h-[52px]'>
                                                        <img src={item.img} alt="" className='w-full h-full' />
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        </div>
                                    </div>
                                )
                            }
                            {
                                showCalendar && (
                                    <div className='absolute top-14 left-[-50px] w-[378px] h-[385px] border-2 rounded-xl bg-white text-black py-6 '>
                                        <div className="flex justify-between font-inter font-semibold text-[16px] leading-[19.36px] px-12">
                                            <div>
                                                <p>Calendar</p>
                                            </div>
                                            <div>
                                                <img src={Arrow} alt="" onClick={closeCalendar} />
                                            </div>
                                        </div>

                                        <div className='m-0 p-0'>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <div className="m-0 p-0">
                                                    <StaticDatePicker
                                                        displayStaticWrapperAs="desktop"
                                                        value={selectedDate}
                                                        onChange={handleDateChange}
                                                        renderInput={(params) => <TextField {...params}
                                                            className='m-0 p-0'
                                                        />}
                                                    />
                                                </div>
                                            </LocalizationProvider>
                                            {/* <input type="date" /> */}

                                        </div>

                                    </div>
                                )
                            }
                            <div className='flex flex-col gap-y-0'>
                                <p className='font-medium text-[15px] text-start'>{dayOfWeek}</p>
                                <p className='text-[#3ABEFF]'>{formattedDate}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;