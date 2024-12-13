import React from 'react'
import add from '../../assets/Add.svg';
function Status({fname ,  lname}) {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 align-center pt-2 gap-y-2'>
            <div className='font-inter font-semibold text-[15px] leading-[18.15px] text-[#000000]'>
                <span className=''><span className='border-b-4 border-[#F24E1E]'>{fname}</span> {lname}</span>
            </div>
            <div className='flex font-medium text-[12px] leading-[14.52px] text-[#A1A3AB] sm:justify-end gap-x-1'>
                <img src={add} alt="" />
                <span className=''>Add {fname} {lname}</span>
            </div>
        </div>
    )
}

export default Status;