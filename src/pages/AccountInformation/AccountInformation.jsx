import React, { useState } from 'react'
import man from '../../assets/Ellipse 1.svg';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
function AccountInformation({ label, name, type }) {

  const navigate= useNavigate();

  const [account, setAccount] = useState({
    firstname: '',
    lastname: '',
    email: '',
    number: '',
    position: ''
  });
  const handleonChange = (event) => {
    setAccount({ ...account, [event.target.name]: event.target.value });
  }
  const created = () => {
    if (account.firstname === '') {
      toast.error("First Name is empty");
    }
    else if (account.lastname === '') {
      toast.error("last Name is empty");
    }
    else if (account.email === '') {
      toast.error("email is empty");
    }
    else if (account.number === '') {
      toast.error("number is empty");
    }
    else if (account.position === '') {
      toast.error("position is empty");
    }
    else {
      toast.success("Successfully Created");
    }
  }
  const handleaccountsubmit = async (event) => {
    event.preventDefault();
    if(account.firstname.trim() === '')
    {
      toast.error("First name is empty");
      return;
    }
    else if (account.lastname.trim() == '')
    {
      toast.error("Last name is empty");
      return;
    }
    else if (account.email.trim() == '')
    {
      toast.error("Email is empty");
      return;
    }
    else if (account.number.trim() == '')
    {
      toast.error("Number is empty");
      return;
    }
    else if (account.position.trim() == '')
    {
      toast.error("position is empty");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/account-info",
        {
          method: "POST",
          header:
          {
            "Content-type": "application/json"
          },
          body: JSON.stringify({ account_info: account })
        })
      if (response.ok) {
        created();
        // toast.success("Succesfully Info Added");
      }
      else {
        toast.error("Error");
      }
    }
    catch (error) {
      toast.error("Error is:", error);
    }
  }
  const onchangepassword = () =>
  {
    navigate('/settings');
  }
  return (
    <>
      <ToastContainer />
      <div className='h-[837px] border-2 border-[#A1A3ABA1] rounded-2xl'>
        <div className="py-4 px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
            <div className='font-semibold text-md sm:text-[24px] sm:leading-[29.05px]'>
              <span> <span className='border-b-4 border-[#F24E1E]'>Account</span> Information</span>
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
            {/* input field */}
            <div className="px-3 py-3 sm:px-9 sm:py-5">
              <form action="" onSubmit={handleaccountsubmit}>
                <Input label="First Name" type="text" name="firstname" onChange={handleonChange} value={account.firstname} />
                <Input label="Last Name" type="text" name="lastname" onChange={handleonChange} value={account.lastname} />
                <Input label="Email Address" type="text" name="email" onChange={handleonChange} value={account.email} />
                <Input label="Contact Number" type="number" name="number" onChange={handleonChange} value={account.number} />
                <Input label="Position" type="text" name="position" onChange={handleonChange} value={account.position} />

                {/* Buttons */}
                <div className='lg:flex gap-x-2 gap-y-5'>
                  <Button name="Update Info" type='submit' />
                  <Button name="Change Password" onClick={onchangepassword} />
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default AccountInformation;