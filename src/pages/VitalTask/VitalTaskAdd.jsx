import React from 'react'
//import dog from '../../assets/Dog.svg';
import Dustbin from './Dustbin';  

function VitalTaskAdd({event}) {
    
    return (
        <div className="w-11/12 mx-auto pt-5 flex flex-col h-full">
            <div className="sm:flex items-center">
                <img src={event.image} alt="" className='w-[158px] h-[158px] mb-3' />
                <div className='flex flex-col gap-3'>
                    <p className='font-inter font-semibold text-[16px] leading-[19.36px] ps-3'>{event.head}</p>
                    <p className='font-inter font-normal text-[12px] leading-[14.25px] ps-3 flex'>Priority: <p className='' style={{color: event.color}}>{event.priority}</p> </p>
                    <p className='font-inter font-normal text-[12px] leading-[14.25px] ps-3 flex'>Status:<p style={{color: event.moderate_color}}>{event.status}</p></p>
                    <p className='font-inter font-normal text-[10px] leading-[12.1px] ps-3 text-[#A1A3AB] flex'>Created on:<p>{event.created}</p></p>
                </div>
              
            </div>
            <div className='font-inter text-[16px] text-[#747474]'>
            <p className='py-10 leading-[19.36px]'>{event.desc}</p>
            <p className='leading-[28.8px]'>Take Luffy and Jiro for a leisurely stroll around the 
                neighborhood. Enjoy the fresh air and give them the 
                exercise and mental stimulation they need for a happy 
                and healthy day. Don't forget to bring along squeaky 
                and fluffy for some extra fun along the way!
            </p>
            <div className='mt-8'>
            <ol className='list-decimal ml-5'>
                {/* <li>hello</li> */}
                {
                    event.tasks.map((task,index)=>(
                        <li key={index}>{task}</li>
                    ))
                }
            </ol>
            </div>
            

            </div>
            <div className="flex-grow"></div>
            <Dustbin />
        </div>
    )
}

export default VitalTaskAdd;