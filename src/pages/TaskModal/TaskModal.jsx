import React, { useState } from 'react'
import Category from '../Category/Category';
import Input from '../../Components/Input/Input';
import Checkbox from '../../Components/Checkbox/Checkbox';
import Button from '../../Components/Button/Button';
import Drag from '../../assets/drag.svg';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function TaskModal({ Open, Closed }) {
    if (!Open)
        return null;

    const [news ,setNews] = useState({
            title : '',
            date : '',
            description : '',
        });
    const onhandleChange =  (e) =>
    {
        setNews({...news , [e.target.name] : e.target.value});
    }
    const onhandlesubmit = async (e) =>
    {
       e.preventDefault();
       
       if(news.title === '')
       {
           toast.warning("Enter Title");
           return;
       }
       else if(news.date === '')
       {
           toast.warning("Select Date");
           return;
       }
       else if (news.description === '')
       {
          toast.warning("Enter Description");
          return;
       }
    try
    {
        // const formData = new FormData();
        // formData.append('title' , news.title);
        // formData.append('date' , news.date);
        // formData.append('description' , news.description);

        const response = await fetch("http://localhost:4000/add_data", {
            method: "POST",
            header : {
              "Content-type" : "application/json"
            },
            body: JSON.stringify(news)
        });
        if(response.ok)
        {
            // const responsedata = await response.json();
            toast.success("Successfully Added Task");
            // console.log(responsedata);
        }
        else
        {
            toast.error("Error");
        }
    }
    catch(error)
    {
        toast.error("Error is:" ,error);
    }
    };
    return (
        <>
            <ToastContainer />
            <div className='fixed top-[148px] left-[290px] bg-black bg-opacity-50 flex justify-center items-center z-10 border border-red-600'>
                <div className='w-[918px] h-[708px] bg-white px-[62px] py-[46px]'>
                    <Category fname="Add New" lname="Task" onClick={Closed} />
                    <div className='border-2 border-[#A1A3AB] mt-[39px]'>
                        <form action="" className='ps-4 pt-4' onSubmit={onhandlesubmit}>
                            <Input label="Title" type="text" name="title" value={news.title} onChange={onhandleChange}/>
                            <Input label="Date" type="date" name="date" value={news.date} onChange={onhandleChange}/>
                            <label htmlFor="" className='font-semibold text-[10px] leading-5 sm:text-[14px] sm:leading-[17.07px] font-montserrat text-black'>Priority</label>
                            <div className='flex items-center gap-4'>
                                <Checkbox color="#F21E1E" name="Extreme" id="extreme" />
                                <Checkbox color="#3ABEFF" name="Moderate" id="moderate" />
                                <Checkbox color="#05A301" name="Low" id="low" />
                            </div>

                            <div className="grid grid-cols-3 sm:grid-cols-3  gap-4 py-1 mb-5">
                                <div className='col-span-2 flex flex-col'>
                                    <label htmlFor="" className='font-semibold text-[10px] leading-5 sm:text-[14px] sm:leading-[17.07px] font-montserrat text-[#000000] py-3'>Task Description</label>
                                    <textarea name="description" id="" className='border-2 border-[#A1A3AB] rounded-lg ps-2 text-[#A1A3AB] font-montserrat font-normal text-[13px] leading-[15.85px] w-[511px] h-[205px]' placeholder="Start writing here..." value={news.description} onChange={onhandleChange}></textarea>
                                </div>
                                <div className='col-span-1 flex flex-col'>
                                    <label htmlFor="" className='font-semibold text-[10px] leading-5 sm:text-[14px] sm:leading-[17.07px] font-montserrat text-[#000000] py-3'>Upload Image</label>
                                    <div className='w-[214px] h-[205px] border border-[#A1A3AB] rounded-lg flex flex-col items-center text-[#A1A3AB] font-normal text-[#13px] leading-[15.85px] '>
                                        <div className='w-[62.5px] h-[57.2px] my-5'>
                                            {/* {
                                                selectedImage ? 
                                                (
                                                    <img src={selectedImage} alt="Selected" className='w-full h-full object-cover rounded-lg' />
                                                ) 
                                                :
                                                (
                                                    <img src={Drag} alt="" className='w-full h-full' />
                                                )
                                            } */}
                                            <img src={Drag} alt="" className='w-full h-full' />
                                        </div>
                                        <p className="py-1">Drag&Drop files here</p>
                                        <p className="py-1">or</p>
                                        <label htmlFor="file-upload" className='border border-[#A1A3AB] w-[74px] flex items-center justify-center rounded-lg cursor-pointer'>
                                            <span className='py-2'>Browser</span>
                                        </label>
                                        <input id="file-upload" type="file" className='hidden'   />
                                        {/* onChange={handleFileChange} accept='image/*' */}
                                    </div>
                                </div>
                            </div>
                            <Button name="Done" type='submit' />
                        </form>
                    </div>
                    <div className='w-[90px] mt-4 ms-4'>
                        <form action="">
                            <Button name="Done" type='submit'/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskModal;