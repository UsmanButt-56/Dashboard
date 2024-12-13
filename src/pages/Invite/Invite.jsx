import React from 'react'

function Invite({fname, lname}) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 text-[#000000] font-montserrat">
            <div className='font-semibold text-md sm:text-[16px] leading-[19.5px]'>
                <span className=''><span className='border-b-4 border-[#F24E1E]'>{fname}</span> {lname}</span>
            </div>
            <div className='flex sm:justify-end py-1'>
                <span className='underline font-montserrat font-semibold text-[14px] leading-[17.07px]'>Go back</span>
            </div>
        </div>
    )
}

export default Invite;