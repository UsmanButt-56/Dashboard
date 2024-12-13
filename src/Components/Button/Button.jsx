import React from 'react'
// import {toast , ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function Button({name , onClick , type="button"}) {
  return (
    <>
    {/* <ToastContainer /> */}
    <div className='bg-[#F24E1E] rounded-md flex justify-center mb-3'>
        <button onClick={onClick} type={type} className='font-montserrat font-medium text-[12px] leading-2 sm:text-sm sm:leading-[17.07px] text-[#FFFFFF] h-[34px] px-0 sm:px-8'>{name}</button>
    </div>
    </>
  )
}

export default Button;