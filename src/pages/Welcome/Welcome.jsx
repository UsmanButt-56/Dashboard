import React, { useState } from 'react'
import hand from '../../assets/hand wave.svg';
import person1 from '../../assets/person1.svg';
import person2 from '../../assets/person2.svg';
import person3 from '../../assets/person3.svg';
import person4 from '../../assets/person4.svg';
import person5 from '../../assets/person5.svg';
import Invited from '../Invited/Invited';
//import Category from '../Category/Category';
// import Invite from '../Invite/Invite';
// import Input from '../../Components/Input/Input';
// import Button from '../../Components/Button/Button';
function Welcome() {
    const [showModal, setShowModal] = useState(false);
    const modal = () => {
        setShowModal(true);
    }
    const close = () =>
    {
        setShowModal(false);
    }
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-between">
                <div className='col-span-1 lg:col-span-1 '>
                    <div className="flex items-center gap-2">
                        <span className='font-medium font-inter text-[15px] sm:text-[36px]'>
                            Welcome back, Sundar
                        </span>
                        <img src={hand} alt="" className='w-8 h-8' />
                    </div>

                </div>
                <div className='col-span-1 lg:col-span-1 flex flex-wrap justify-start items-center lg:justify-end gap-4'>
                    <div className='flex items-center gap-1 flex-wrap'>
                        <img src={person1} alt="" />
                        <img src={person2} alt="" />
                        <img src={person3} alt="" />
                        <img src={person4} alt="" />
                        <img src={person5} alt="" />
                    </div>
                    <div className='flex items-center h-[36.28px]'>
                        <button className='border-2 border-[#FF6767] px-5 py-1 rounded-md font-medium text-[14px]' onClick={modal}>
                            Invite
                        </button>
                    </div>
                </div>
            </div>
            <Invited show={showModal}  close={close}/>
        </>
    )
}

export default Welcome;