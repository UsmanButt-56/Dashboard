import React from 'react'
import Button from '../../Components/Button/Button';
import edit1 from '../../assets/Edit1.svg';
import delete1 from '../../assets/Delete.svg';
import Category from '../Category/Category';
import Status from '../../Components/Status/Status';
import Record1 from '../../Components/Table/Record1';
import RecordPriority from '../../Components/Table/RecordPriority';
import {ToastContainer , toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import delete from '../../assets/Delete.svg';
import { useNavigate } from  'react-router-dom';

function TaskCategories({ name }) {
    const navigate = useNavigate();
    const create = () => {
        toast.success("Successfully");
        navigate('/create');
    }
    return (
        <div className='border border-[#A1A3AB] rounded-xl h-[837px]'>
            <div className="px-5 py-4">
                <Category fname="Task" lname="Categories" />
                <div className='w-[162px] mt-4'>
                    <Button name="Add Category" onClick={create} />
                    <ToastContainer/>
                </div>
                <Status fname="Task" lname="Status" />
                <Record1 />
            </div>

            <hr className='my-4' />

            <div className="px-5 ">
                <Status fname="New" lname="Priority" />
                <RecordPriority />
            </div>

        </div>
    )
}

export default TaskCategories;