import React from 'react';
function Inputs({name, person, type ,placeholder, onChange ,value}) {
  return (
    <div className='flex flex-col w-full h-full mb-5 relative justify-center'>
      <img src={person} alt="" className='absolute mx-3'/>
      <input type={type} name={name} placeholder={placeholder} onChange={onChange} value={value} className='px-14 font-montserrat text-[16px] leading-[19.5px] border-2 border-[#A1A3AB] rounded-md w-full h-[50px] md:h-[60px]' />   
    </div>
  )
}
export default Inputs;