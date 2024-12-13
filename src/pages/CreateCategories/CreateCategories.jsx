import React, { useState } from 'react'
import Category from '../Category/Category';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
function CreateCategories() {
    const navigate = useNavigate();
    const [categoryName, setCategoryName] = useState('');
    const handleInputChange = (event) => {
        setCategoryName(event.target.value);
    };
    const created = () => {
        if (categoryName === '') {
            toast.error("Empty");
        }
        else {
            toast.success("Successfully Created");
            setCategoryName('');
        }
    };
    const cancel = () => {
        toast.error("Cancelled");
        navigate('/category');
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        // created();
        if (categoryName.trim() === "") {
            toast.error("Category name cannot be empty.");
            return;
        }
        try {
            const response = await fetch("http://localhost:4000/category",
                {
                    method: "POST",
                    headers:
                    {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ name: categoryName })
                });
            if (response.ok) {
                created();

                // toast.success("Category is Added");
            }
            else {
                toast.error("Failed to add category");
            }
        }
        catch (error) {
            toast.error("Error is :", error);
        }
    }
    return (
        <>
            <ToastContainer />
            <div className='border border-[#A1A3AB] rounded-xl h-[837px]'>
                <div className="px-5 py-4">
                    <Category fname="Create" lname="Categories" />
                    {/* onClick={closed} */}
                    <div className='mt-7'>
                        <form action="" onSubmit={handleSubmit}>
                            <Input label="Category name" type="text" name="create_category" onChange={handleInputChange} value={categoryName} />
                            <div className="sm:flex gap-2">
                                <Button name="Create" type="submit" />
                                <Button name="Cancel" onClick={cancel} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateCategories;