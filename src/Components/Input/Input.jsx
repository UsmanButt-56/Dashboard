import React from 'react'

function Input({ label , type, name , value , onChange}) {
  return (
    <>
      <div className='flex flex-col w-full max-w-[511px] mb-5'>
        <label htmlFor="" className='font-semibold text-[10px] leading-5 sm:text-[14px] sm:leading-[17.07px] font-montserrat text-[#000000] pb-2'>{label}</label>
        <input type={type} name={name} value={value} onChange={onChange} placeholder='' className='ps-2 border-2 border-[#A1A3AB] rounded-md w-full h-[30px] md:h-[37px]' />
      </div>
    </>
  )
}

export default Input;