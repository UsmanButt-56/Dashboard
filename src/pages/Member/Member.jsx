import React,{useEffect,useState} from 'react'
import Gurung from '../../assets/Gurung.svg';
import Jerme from '../../assets/Jerme.svg';
import Thomas from '../../assets/Thomas.svg';
import Rachel from '../../assets/Rachel.svg';
import down from '../../assets/downarrow.svg';
function Member() {
    const [members ,setMembers] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:4000/Members")
        .then((response)=> response.json())
        .then((data)=>setMembers(data))
        .catch((error)=>console.error("Error :", error));
    },[])
    // const Member = [
    //     {
    //         id: 1,
    //         image: Gurung,
    //         name: "Upashna Gurung",
    //         email: "uppaeygrg332@gmail.com",
    //         edit: "Can edit"
    //     },
    //     {
    //         id: 2,
    //         image: Jerme,
    //         name: "Jeremy Lee",
    //         email: "jerrylee1996@gmail.com",
    //         edit: "Can edit"
    //     },
    //     {
    //         id: 3,
    //         image: Thomas,
    //         name: "Thomas Park",
    //         email: "parktho123@gmail.com",
    //         edit: "Owner"
    //     },
    //     {
    //         id: 4,
    //         image: Rachel,
    //         name: "Rachel Takahasi",
    //         email: "takahasirae32@gmail.com",
    //         edit: "Can edit"
    //     },
    // ]
    return (
        <div className='py-3'>
            <div className=''>
                <p className='font-montserrat font-semibold text-[14px] leading-[17.07px] text-[#000000]'>Members</p>
            </div>
            {
                members.map((member) => (
                    <div className="grid grid-cols-3 my-2" key={member.id}>
                        <div className='col-span-2 '>
                            <div className='flex'>
                                <div className='w-[45px] h-[45px]'>
                                    <img src={member.images} alt="" className='w-full h-full' />
                                </div>
                                <div className='flex flex-col  justify-center ms-2'>
                                    <p className='font-montserrat font-semibold text-[14px] leading-[16.94px] text-[#000000]'>{member.name}</p>
                                    <p className='font-inter font-medium text-[10px] leading-[12.1px]'>{member.email}</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-1 flex justify-end items-center gap-2'>
                            <span className='font-montserrat font-medium text-[13px] leading-[15.85px]'>{member.edit}</span>
                            <img src={down} alt="" />
                        </div>
                    </div>
                ))
            }
            {/* <div className="grid grid-cols-3">
                <div className='col-span-2 border border-red-500'>
                    <div className='flex'>
                        <div className='w-[45px] h-[45px]'>
                            <img src={Gurung} alt="" className='w-full h-full' />
                        </div>
                        <div className='flex flex-col items-center justify-center ms-2'>
                            <p className='font-montserrat font-semibold text-[14px] leading-[16.94px] text-[#000000]'>Upashna Gurung</p>
                            <p className='font-inter font-medium text-[10px] leading-[12.1px]'>uppaeygrg332@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 border border-yellow-500 flex justify-end items-center gap-2'>
                    <span className='font-montserrat font-medium text-[13px] leading-[15.85px]'>Can edit</span>
                    <img src={down} alt="" />
                </div>
            </div> */}
        </div>
    )
}

export default Member;