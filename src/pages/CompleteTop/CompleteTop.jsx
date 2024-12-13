import React from 'react'
import CompleteTask from '../../assets/CompletedTask.svg';
function CompleteTop() {
    return (
        <div className='w-11/12 mx-auto flex gap-2 pb-5'>
            <img src={CompleteTask} alt="" />
            <span className='text-[#FF6767]'>Completed Task</span>
        </div>
    )
}

export default CompleteTop;