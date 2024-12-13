import React, { useState } from 'react'
import edit1 from '../../assets/Edit1.svg';
import delete1 from '../../assets/Delete.svg';
import EditTask from '../../pages/EditTask/EditTask';
function Record1() {
    const [tasks ,setTasks] = useState([
        { id: 1,  number: 1,  status: "Completed" },
        { id: 2,  number: 2,  status: "In Progress" },
        { id: 3,  number: 3,  status: "Not Started" }
    ]);

    const [editTask , setEditTask ] = useState(false);
    const [taskEdit , setTaskEdit] = useState(null);
    const edit = (task) =>
    {
        setEditTask(true);
        setTaskEdit(task);
    }
    const close = () =>
    {
        setEditTask(false);
    }
    const updatetask = (id , newStatus) =>
    {
        setTasks(tasks.map(task => task.id === id ? { ...task, status: newStatus } : task));
        close();
    }
    return (
        <>
        <div className='overflow-hidden rounded-xl border border-[#A1A3AB] mt-5 shadow-b-xl'>
            <div className="overflow-x-auto">
                <table className='table-auto w-full'>
                    <thead className=''>
                        <tr className='font-montserrat font-semibold text-[15px] leading-[18.29px]'>
                            <th className='border border-slate-300 text-center py-3 w-[7%]'>SN</th>
                            <th className='border border-slate-300 text-center w-[40%]'>Task Status</th>
                            <th className='border border-slate-300 text-center w-[40%]'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((item) => (
                                <tr className='font-montserrat font-medium text-[15px] leading-[18.29px]' key={item.id}>
                                    <td className='text-center py-5'>{item.number}</td>
                                    <td className='border-l border-slate-300 text-center'>{item.status}</td>
                                    <td className='border-l'>
                                        <div className='flex justify-center items-center gap-x-1 md:gap-x-4'>
                                            <div className='w-[65px] h-[30px] md:w-[93px] md:h-[36px] bg-[#F24E1E] flex items-center justify-center space-x-1 rounded-md cursor-pointer' onClick={()=>edit(item)} >
                                                <img src={edit1} alt="" />
                                                <p className='font-medium text-[15px] leading-[18.29px] text-white'>Edit</p>
                                            </div>
                                            <div className='w-[75px] h-[30px] md:w-[93px] md:h-[36px] bg-[#F24E1E] flex items-center justify-center space-x-1 rounded-md cursor-pointer'>
                                                <img src={delete1} alt="" />
                                                <p className='font-medium text-[15px] leading-[18.29px] text-white'>Delete</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
        <EditTask edit={editTask} close={close} task={taskEdit} onUpdate={updatetask} />
        </>
    )
}

export default Record1;