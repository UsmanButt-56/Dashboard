import React from 'react'
import menu from '../../assets/MENU.svg';
//import Event1 from '../../assets/Event1.svg';
//import Event2 from '../../assets/Event2.svg';
import { useNavigate } from 'react-router-dom';
function Event({ moderate_color, color, head, desc, image, priority, status, created, onClick }) {
   const navigate = useNavigate();
   const eventtask = () =>
   {
        navigate('/dashboard/eventtask' ,{
            state : {
                moderate_color, 
                color, 
                head, 
                desc, 
                image, 
                priority, 
                status, 
                created,
            },
        });
   }
    return (
        <div className="w-11/12 mx-auto py-2">
            <div className="border-2 border-[#A1A3AB] rounded-md relative mx-2 my-3" onClick={onClick}>
                <div className="absolute right-2 top-2 cursor-pointer">
                    <img src={menu} alt="" onClick={eventtask}/>
                    {/* onClick={eventtask} */}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[0.5fr_2.5fr_1fr] mt-2 py-4 px-2 md:px-0">
                    <div className="justify-center hidden md:flex md:order-1 mt-1">
                        <div className="w-[12px] h-[12px] border-2 rounded-full" style={{ borderColor: color}}></div>
                    </div>
                    <div className="order-2 md:order-2">
                        <p className='font-semibold text-[16px] font-inter leading-[19.36px] text-black'>{head}</p>
                        <p className='font-medium text-[14px] font-inter leading-[16.94px] text-[#747474] pt-3'>{desc}</p>

                    </div>
                    <div className="flex  order-1 md:order-3 w-[88px] h-[88px] me-2">
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[0.5fr_3.5fr] pb-4 px-2 md:px-0 font-inter font-medium text-[10px] text-black">
                    <div className=""></div>
                    <div className='flex flex-col xl:flex-row gap-1 md:gap-3'>
                        <div className="flex">Priority:<p style={{ color: moderate_color }}> {priority}</p></div>
                        <div className="flex">Status: <p style={{ color: color }}>{status}</p></div>
                        <div className="flex text-[#A1A3AB]">Created on: <p>{created}</p></div>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default Event;