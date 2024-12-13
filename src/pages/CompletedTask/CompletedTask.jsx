import React from 'react'
//import CompleteTask from '../../assets/CompletedTask.svg';
import menu from '../../assets/MENU.svg';
//import dog from '../../assets/Dog.svg';
//import CompleteTop from '../CompleteTop/CompleteTop';
function CompletedTask({ head, desc, status, time ,image}) {
    return (
        <>
        <div className='w-11/12 mx-auto py-5'>
            <div className="border-2 border-[#A1A3AB] relative md:mx-4 max-w-[338px]  sm:max-w-none rounded-lg">
                <div className="absolute right-2 top-2">
                    <img src={menu} alt="" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-[0.5fr_2.5fr_1fr] mt-2 py-4 px-2 md:px-0">
                    <div className="justify-center hidden md:flex md:order-1">
                        <div className="w-[12px] h-[12px] border-2 border-green-600 rounded-full"></div>
                    </div>
                    <div className="order-2 md:order-2">
                        <p className='font-semibold text-[16px] font-inter leading-[19.36px] text-black'>{head}</p>
                        <p className='font-medium text-[14px] font-inter leading-[16.94px] text-[#747474]'>{desc}</p>
                        <div className='mt-2'>
                        <p className='flex font-medium text-[10px] font-inter leading-[12.1px]'>Status : <p className='text-green-500'>{status}</p> </p>
                        <p className='font-medium text-[10px] font-inter leading-[12.1px] text-[#747474]'>Completed {time}</p>
                        </div>
                    </div>
                    <div className="flex justify-center order-1 md:order-3 pe-2">
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CompletedTask;