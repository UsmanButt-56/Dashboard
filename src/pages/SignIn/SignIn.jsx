import React,{useState} from 'react';
import back from '../../assets/back.svg';
import Inputs from '../../Components/Input/Inputs';
import user from '../../assets/user.svg';
import password from '../../assets/password.svg';
import Illustration2 from '../../assets/Illustration2.svg';
import facebook from '../../assets/facebook.svg';
import google from '../../assets/google.svg';
import twitter from '../../assets/twitter.svg';
import { useNavigate } from 'react-router-dom';
//import Layout from '../../Layouts/Layout';
import { toast ,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function SignIn() {
    const navigate = useNavigate();
    const [login ,setLogin] = useState({
    username : '',
    password : ''
    });
    const [errors ,setErrors] = useState({});

    const onhandleinput = (e) =>
    {
        setLogin({...login , [e.target.name] : e.target.value });
    }
    const onhandlesubmit = async (e) =>
    {
        e.preventDefault();
        if(login.username === '')
        {
            errors.username = "Enter Username";
            toast.warning("Enter Username");
        }
        if(login.password === '')
        {
            errors.password = "Enter password";
            toast.warning("Enter password");
        }
        try 
        {
            const response = await fetch("https://dummyjson.com/auth/login",{
            method: 'POST' ,
            headers : 
            {
                "Content-type" : "application/json",
                "Accept" : "application/json"
            },
            body : JSON.stringify(login)
            });
            // {
            //   "username": "emilys",
            //   "password": "emilyspass"
            // }
            const result = await response.json();
            if(!response.ok)
            {
                console.log("Error");
                toast.error("Invalid ")
            }
            else
            {
                localStorage.setItem('authToken' , result.token);
                localStorage.setItem('current_user_id' ,result.user_id);
                toast.success("Login Successfully");
                console.log(result.token);
                navigate('/dashboard');
            }
        }
        catch(error)
        {
            toast.error("Error is:",error);
        }
    }
    const createone = () =>
    {
       navigate('/signup');
    }
    return (
        <>
        <ToastContainer/>
        <div className='flex relative min-h-screen'>
            <img src={back} alt="" className='z-0 w-full h-screen absolute object-cover' />

            <div className="relative flex z-10 bg-white w-full h-auto lg:my-40 lg:mx-24">

                <div className='w-full h-[500px] lg:w-[50%] flex flex-col  lg:mt-20 px-2 py-2'>
                    <h2 className='mb-4 font-montserrat font-bold text-[36px] leading-[43.88px]'>Sign In</h2>
                    <div className=''>
                        <form action="" className='' onSubmit={onhandlesubmit}>
                            <Inputs person={user} type="text" placeholder="Enter Username...emilys" onChange={onhandleinput} name="username" value={login.username} />
                            { errors.username && <p className='text-red-500'>{errors.username}</p> }
                            <Inputs person={password} type="password" placeholder="Enter Password...emilyspass" onChange={onhandleinput} name="password" value={login.password} />
                            { errors.password && <p className='text-red-500'>{errors.password}</p> }
                            <div class="flex items-center mt-8 mb-4">
                                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 border-[#565454]" />
                                <label for="default-checkbox" class="ms-4 text-sm font-montserrat font-medium text-[16px] leading-[19.5px] text-[#212427]">Remember Me</label>
                            </div>

                            <div className='h-[60px] bg-[#FF9090] w-[129px] text-sm font-montserrat font-medium text-[16px] leading-[19.5px] text-white flex justify-center rounded-md' >
                                <button type='submit'>Login</button>
                            </div>

                            <div className='mt-3 flex text-sm font-montserrat font-medium text-[16px] leading-[19.5px]'>
                                <p className='text-[#212427] flex items-center'>Or, Login with 
                                    <span className='flex gap-4'>
                                    <img src={facebook} alt="" className='ms-2'/>
                                    <img src={google} alt="" />
                                    <img src={twitter} alt="" />
                                    </span>
                                </p>
                            </div>

                            <div className='mt-3 flex text-sm font-montserrat font-medium text-[16px] leading-[19.5px]'>
                                <p className='text-[#212427]'>Don't have an account? <span className='text-[#008BD9] cursor-pointer' onClick={createone}>Create One</span></p>
                            </div>

                        </form>
                    </div>

                </div>

                <div className="lg:w-[50%] h-[100%] lg:flex hidden lg:justify-end items-end flex-col">
                    <img src={Illustration2} alt="" className='hidden md:flex h-auto w-full' />
                </div>

            </div>
        </div>
    </>
    )
}

export default SignIn;