import React,{useState} from 'react'
import back from '../../assets/back.svg';
import Illustration from '../../assets/Illustration.svg';
import Inputs from '../../Components/Input/Inputs';
import person from '../../assets/person.svg';
import last from '../../assets/last.svg';
import user from '../../assets/user.svg';
import email from '../../assets/user.svg';
import password from '../../assets/password.svg';
import confirm from '../../assets/confirm.svg';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function SignUp() {
    const navigate = useNavigate();
    const [formData ,setFormData] = useState({
        firstname: '',
        lastname: '',
        username:'',
        email:'',
        password:'',
        confirmpassword:''
    });
    const handleChange = (e) => 
    {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handlesubmit = async (e) =>
    {
        e.preventDefault();
        if(formData.firstname === '')
        {
            toast.warning("Enter First Name");
            return;
        }
        if(formData.lastname === '')
        {
            toast.warning("Enter Last Name");
            return;
        }
        if(formData.username === '')
        {
            toast.warning("Enter Username");
            return;
        }
        if(formData.email === '')
        {
            toast.warning("Enter Email");
            return;
        }
        if(formData.password === '')
        {
            toast.warning("Enter password");
            return;
        }
        if(formData.confirmpassword === '')
        {
            toast.warning("Enter Confirm password");
            return;
        }
        if (formData.password !== formData.confirmpassword)
        {
            toast.error("Password not matched");
            return;
        }
        try
        {
            const response = await fetch("http://localhost:3000/users",
            {
                method: "POST",
                headers: 
                {
                   "Content-Type" : "application/json"
                },
                body: JSON.stringify(formData)
            });
            if(response.ok)
            {
               toast.success("User Registered Successfully");
            }
            else
            {
                toast.error("Failed to registered user.");
            }
        }
        catch(error){
            toast.error("Error :", error);
        }
    }
    const signIn = () =>
    {
        navigate('/');
    }
    return (
        <>
        <ToastContainer />
        <div className='flex relative min-h-screen'>
            <img src={back} alt="" className='z-0 w-full h-screen absolute object-cover' />

            <div className="relative flex z-10 bg-white w-full justify-center items-start lg:my-40 lg:mx-40">
                <div className="lg:w-[50%] h-full lg:flex  hidden  lg:items-center">
                    <img src={Illustration} alt="" className='hidden md:flex h-full' />
                </div>

                <div className='w-full h-[690px] lg:w-[50%] flex flex-col px-2 py-2'>
                    <h2 className='mb-4 font-montserrat font-bold text-[36px] leading-[43.88px]'>Sign Up</h2>
                    <div className=''>
                        <form action="" className='' onSubmit={handlesubmit}>
                            <Inputs person={person} type="text" name="firstname" placeholder="Enter First Name" onChange={handleChange} value={formData.firstname} />
                            <Inputs person={last} type="text" name="lastname" placeholder="Enter Last Name" onChange={handleChange} value={formData.lastname} />
                            <Inputs person={user} type="text" name="username" placeholder="Enter Username" onChange={handleChange} value={formData.username} />
                            <Inputs person={email} type="text" name="email" placeholder="Enter Email" onChange={handleChange} value={formData.email} />
                            <Inputs person={password} type="password" name="password" placeholder="Enter Password" onChange={handleChange} value={formData.password} />
                            <Inputs person={confirm} type="password" name="confirmpassword" placeholder="Confirm Password" onChange={handleChange} value={formData.confirmpassword}/>
                            <div class="flex items-center mt-8 mb-4">
                                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 border-[#565454]" />
                                <label for="default-checkbox" class="ms-4 text-sm font-montserrat font-medium text-[16px] leading-[19.5px] text-[#212427]">I agree to all terms</label>
                            </div>

                            <div className='h-[60px] bg-[#FF9090] w-[129px] text-sm font-montserrat font-medium text-[16px] leading-[19.5px] text-white flex justify-center rounded-md'>
                                <button type='submit'>Register</button>
                            </div>

                            <div className='mt-3 flex text-sm font-montserrat font-medium text-[16px] leading-[19.5px]'>
                                <p className='text-[#212427]'>Already have an account? <span className='text-[#008BD9] cursor-pointer' onClick={signIn}>Sign In</span></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SignUp;