import React,{useState} from 'react'
import Pending from '../../assets/Pending.svg';
import plus_sign from '../../assets/plus-sign.svg';
import TaskModal from '../TaskModal/TaskModal';
function ToDo() {
    const [isModal, setIsModal] = useState(false);

    const ModalOpen = () =>
    {
        setIsModal(true);
        // console.log("Todo");
    }
    const ModalClosed = () =>
    {
        setIsModal(false);
    }
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.toLocaleDateString('en-US', { month: 'long' });
    return (
        <>
            <div className='w-11/12 mx-auto py-3'>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center">
                    <div className='col-span-1 font-inter font-medium text-[15px]'>
                        <div className='flex gap-2'>
                            <img src={Pending} alt="" />
                            <span className='text-[#FF6767]'>To-Do</span>
                        </div>
                    </div>
                    <div className='col-span-1 font-inter font-medium text-[12px] text-[#A1A3AB]'>
                        <div className="lg:flex flex lg:justify-end gap-2 cursor-pointer" onClick={ModalOpen}>
                            <img src={plus_sign} alt="" />
                            <span>Add Task</span>
                        </div>
                    </div>
                </div>

                <div className='flex font-normal text-[12px] leading-[14.52px] gap-3 mt-3'>
                    <p className='text-black'>{` ${day} ${month} `}</p>
                    <p className='text-[#A1A3AB]'>Today </p>
                </div>
                
            </div>
            <TaskModal Open={isModal} Closed={ModalClosed }/>
        </>
    )
}

export default ToDo;