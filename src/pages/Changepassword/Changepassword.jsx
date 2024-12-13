import React, { useState } from 'react'
import man from '../../assets/Ellipse 1.svg';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Changepassword({ label, name, type }) {
  const [password, setPassword] = useState({
    current: '',
    new: '',
    confirm: ''
  });
  // const update = () => {
  //   if (password.current === '') {
  //     toast.error("Enter the current password");
  //   }
  //   else if (password.new === '') {
  //     toast.error("Enter the new password");
  //   }
  //   else if (password.confirm === '') {
  //     toast.error("Enter the confirm password");
  //   }
  //   else 
  //   {
  //     // toast.success("Successfully");
  //     if(password.new === password.confirm)
  //     {
  //       toast.success("Successfully");
  //     }
  //     else
  //     {
  //       toast.error("Password not matched");
  //     }
  //   }
  // }
  const handleonChange = (event) => {
    setPassword({ ...password, [event.target.name]: event.target.value });
  }
  const handleonSubmit = async (event) => {
    event.preventDefault();
    if (password.current === '') 
    {
      toast.error("Enter the current password");
      return;
    }
    else if (password.new === '') 
    {
      toast.error("Enter the new password");
      return;
    }
    else if (password.confirm === '') 
    {
      toast.error("Enter the confirm password");
      return;
    }
    if (password.new !== password.confirm)
    {
      toast.error("Password not matched");
      return;
    }
    try {
      const response = await fetch("http://localhost:4000/password",
        {
          method: "POST",
          headers:
          {
            "Content-type": "application/json"
          },
          body: JSON.stringify(password)
        })
      if (response.ok) {
        // update();
        toast.success("Successfully Updated");
      }
      else {
        toast.error("Error");
      }
    }
    catch (error) {
      toast.error("Error is:", error);
    }
  }
  return (
    <>
      <ToastContainer />
      <div className='h-[837px] border-2 border-[#A1A3ABA1] rounded-2xl'>
        <div className="py-4 px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
            <div className='font-semibold text-md sm:text-[24px] sm:leading-[29.05px]'>
              <span> <span className='border-b-4 border-[#F24E1E]'>Change</span> Password</span>
            </div>
            <div className='sm:flex sm:justify-end font-semibold text-[14px] leading-[17.07px] underline'>
              <span>Go Back</span>
            </div>
          </div>
          {/*  */}
          <div className='flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-3 w-full h-full my-5 '>
            <img src={man} alt="" className='' />
            <div className='flex flex-col items-center sm:items-start'>
              <span className='font-semibold text-xs sm:text-[20px] sm:leading-[24.2px]'>Sundar Gurung</span>
              <span className='font-normal text-xs sm:text-[15px] sm:leading-[18.15px]'>sundargurung360@gmail.com</span>
            </div>
          </div>
          {/*  */}
          <div className='border-2 border-[#A1A3ABA1] rounded-2xl h-[534px]'>
            {/* h-[434px] */}
            {/* input field */}
            <div className="px-3 py-3 sm:px-9 sm:py-5">
              <form action="" onSubmit={handleonSubmit}>
                <Input label="Current Password" type="password" name="current" value={password.current} onChange={handleonChange} />
                <Input label="New Password" type="password" name="new" value={password.new} onChange={handleonChange} />
                <Input label="Confirm Password" type="password" name="confirm" value={password.confirm} onChange={handleonChange} />

                {/* Buttons */}
                <div className='lg:flex gap-x-2 gap-y-5'>
                  <Button name="Update Password" type='submit' />
                  <Button name="Cancel" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Changepassword;