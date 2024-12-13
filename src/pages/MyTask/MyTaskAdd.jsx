import React from 'react'
import Dustbin from './Dustbin'; 

function MyTaskAdd({ event }) {
    return (
        <div className="w-11/12 mx-auto pt-5 flex flex-col h-full">
            <div className="sm:flex items-center">
                <img src={event.image} alt="" className='w-[158px] h-[158px] mb-3 ' />
                <div className='flex flex-col gap-3'>
                    <p className='font-inter font-semibold text-[16px] leading-[19.36px] ps-3'>{event.head}</p>
                    <p className='font-inter font-normal text-[12px] leading-[14.25px] ps-3 flex'>Priority: <p className='' style={{ color: event.color }}>{event.priority}</p> </p>
                    <p className='font-inter font-normal text-[12px] leading-[14.25px] ps-3 flex'>Status:<p style={{ color: event.moderate_color }}>{event.status}</p></p>
                    <p className='font-inter font-normal text-[10px] leading-[12.1px] ps-3 text-[#A1A3AB] flex'>Created on:<p>{event.created}</p></p>
                </div>

            </div>
            <div className='font-inter text-[16px]'>
                <p className='font-bold flex text-[#747474]'>Task Title: <p className='font-medium'>{event.title}</p></p>

                <p className='font-bold text-[#747474]'>Objective:
                    <span className='font-medium text-start text-[#747474]'> {event.Objective}</span>
                </p>


                <p className='font-bold  text-[#747474]'>Task Description:
                    <span className='font-medium'> {event.Task_Description}</span>
                </p>

                <div className='text-[#747474]'>
                    <p className='font-bold text-[#747474]'>Additional Notes:</p>
                        <ul className='list-disc pl-5 font-medium'>
                            {
                                event.Notes.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))
                            }
                        </ul>   
                </div>

                <p className='font-bold flex text-[#747474]'>Deadline for Submission: <p className='font-medium'>  {event.Deadline}</p></p>

            </div>
            
            <div className="flex-grow"></div>
            <Dustbin className=""/>
        </div>
    )
}

export default MyTaskAdd;