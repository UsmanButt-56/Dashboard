import React from 'react'
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import Category from '../Category/Category';
import Member from '../Member/Member';

function Invited({show, close}) {
    if (!show)
        return null;
    return (
        <div className='fixed top-[210px] left-[392px] w-[811px] h-[549px] p-6 rounded-lg shadow-lg bg-white border-2 border-[#F9F9F9] z-10'>
            <div className='px-[23px] py-[25px]'>
                <Category fname="Send an invite" lname="to a new member" onClick={close} />
                <div className="border border-[#A1A3AB] mt-5 px-3">
                    <div className="grid grid-cols-4 mt-3">
                        <div className='col-span-3 '>
                            <Input label="Email" placeholder="neerajgurung99@gmail.com" />
                        </div>
                        <div className='col-span-1 flex justify-end items-center'>
                            <Button name="Send Invite" />
                        </div>
                    </div>
                    <Member />
                    <div className="grid grid-cols-4 ">
                        <div className='col-span-3 '>
                            <Input label="Project Link" placeholder="neerajgurung99@gmail.com" />
                        </div>
                        <div className='col-span-1 flex justify-end items-center'>
                            <Button name="Copy Link" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Invited;