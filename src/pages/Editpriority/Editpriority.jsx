import React, { useState,useEffect } from 'react'
import Category from '../Category/Category';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Editpriority({ edit, close,task,onUpdate }) {
  if (!edit)
    return null;
  const [statusName, setStatusName] = useState('');
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    setStatusName(event.target.value);
  }
  useEffect(() => {
    setStatusName(task.status);
}, [task]);
  const create = () => {
    if (statusName === '') {
      toast.error("Empty");
    }
    else {
      toast.success("Successfully Created");
      setStatusName('');
    }
  }
  const closed = () => {
    // toast.error("Cancelled");
    navigate('/category');
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (statusName.trim() === '') {
      toast.error("Add priority");
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
          <Category fname="Add" lname="Task Priority" onClick={close} />
          <div className="border border-[#A1A3AB] mt-5 py-3 px-3 h-[540px]">
            <form action="" onSubmit={handleSubmit} >
              <Input label="Task Priority Title" type="text" name="edit" onChange={handleInputChange} value={statusName} />
              <div className='sm:flex gap-2'>
                <Button name="Create" type='submit' />
                <Button name="Cancel" onClick={closed} />
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}

export default Editpriority;