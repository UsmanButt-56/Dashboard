import React, { useState,useEffect } from 'react'
import Category from '../Category/Category';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
function EditTask({ edit, close , task, onUpdate}) {
    if (!edit)
        return null;
    
    const [statusName, setStatusName] = useState(task.status);
    const navigate = useNavigate();
    const handleInputChange = (event) => {
        setStatusName(event.target.value);
    }

    useEffect(() => {
        setStatusName(task.status);
    }, [task]);

    const create = () =>
    {
        if(statusName === '')
        {
            toast.error("Empty");
        }
        else
        {
            toast.success("Successfully Created");
            setStatusName('');
        }
    }
    const cancel = () => {
        // toast.error("Cancelled");
        navigate('/category');
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(statusName.trim() === "")
        {
            toast.error("Task Can't be added");
            return;
        }
        onUpdate(task.id, statusName);
        toast.success("Task Updated Successfully");
    }

    return (
        <>
            <ToastContainer />
            <div className='fixed top-[148px] left-[290px] bg-black'>
                <div className='w-[918px] h-[708px] bg-white px-[62px] py-[46px]'>
                    <Category fname="Edit" lname="Task Status" onClick={close} />
                    <div className="border border-[#A1A3AB] mt-5 py-3 px-3 h-[540px]">
                        <form action="" onSubmit={handleSubmit} >
                            <Input label="Task Status Name" type="text" name="edit" value={statusName} onChange={handleInputChange} />
                            <div className='sm:flex gap-2'>
                                <Button name="Create" type='submit' />
                                <Button name="Cancel" onClick={cancel} type="button" />
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default EditTask;