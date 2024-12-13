import React from 'react'

function Category({ fname, lname , onClick}) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2  text-[#000000]">
            <div className='font-inter font-semibold text-md sm:text-[24px] leading-[29.05px]'>
                <span className=''><span className='border-b-4 border-[#F24E1E]'>{fname}</span> {lname}</span>
            </div>
            <div className='flex sm:justify-end py-1'>
                <span className='underline font-montserrat font-semibold text-[14px] leading-[17.07px] cursor-pointer' onClick={onClick}>Go back</span>
            </div>
        </div>
    )
}

export default Category;