import React from 'react'
import Event1 from '../../assets/Event1.svg';
import { useNavigate , useLocation } from 'react-router-dom';
import Threebins from '../MyTask/Threebins';
function EventTask() {
    const navigate = useNavigate();
    const {state}= useLocation();
    const goback = () =>
    {
        navigate('/dashboard');
    }
    return (
        <div className='w-full min-h-[837px] border border-[A1A3AB] rounded-xl py-5 px-5 flex flex-col'>
            <div className="grid grid-cols-4">
                <div className='col-span-3 lg:flex inline '>
                    <div className=' w-[120px] h-[120px] sm:w-[210px] sm:h-[216.9px] flex justify-center'>
                        <img src={Event1} alt="" className='w-full h-full' />
                    </div>
                    <div className='lg:ms-4 flex flex-col gap-1 sm:gap-3'>
                        <p className='font-inter font-semibold text-[14px] sm:text-[24px]'>{state.head}</p>
                        <p className='font-inter font-normal text-[9px] sm:text-[12px] sm:leading-[14.25px]'>Priority :  <span className='text-[#42ADE2]'>Moderate </span> </p>
                        <p className='font-inter font-normal text-[9px] sm:text-[12px] sm:leading-[14.25px]'>Status :  <span className='text-[#F21E1E]'>Not Started </span> </p>
                        <p className='font-inter font-normal text-[9px] sm:text-[12px] sm:leading-[14.25px]'>Created on :  <span>Moderate </span> </p>
                    </div>

                </div>
                <div className='col-span-1 flex justify-end font-montserrat font-semibold text-[9px] sm:text-[14px] sm:leading-[17.07px] cursor-pointer' onClick={goback} >
                  <p className='underline text-[#000000]'>Go back</p>
                </div>
            </div>
            <div className='py-6 font-inter font-normal text-[12px] sm:text-[16px] leading-[19.44px] text-[#747474]'>
                <p className=''>Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements)</p>
            </div>

            <div className='pb-6 font-inter font-normal text-[13px] sm:text-[16px] leading-[19.44px] text-[#747474]'>
                <ol className='list-decimal ml-5 '>
                    <li className='py-3'>A cake, with candles to blow out. (Layer cake, cupcake, flat sheet cake)</li>
                    <li className='py-3'>The birthday song.</li>
                    <li className='py-3'>A place to collect gifts.</li>
                </ol>
            </div>

            <div className='pb-6 font-inter font-normal text-[16px] leading-[19.44px] text-[#747474]'>
                <p className='font-semibold'>Optional:</p>
                <ul className='list-disc ml-5 '>
                    <li className='py-3'>Paper cone-shaped party hats, paper whistles that unroll.</li>
                    <li className='py-3'>Games, activities (carry an object with your knees, then drop it into a milk bottle.)</li>
                    <li className='py-3'>Lunch: sandwich halves, or pizza slices, juice, pretzels, potato chips…THEN cake & candles and the song.</li>
                </ul>
            </div>
            
            <div className='flex-grow'></div>
                <Threebins />
        </div>
    )
}

export default EventTask;