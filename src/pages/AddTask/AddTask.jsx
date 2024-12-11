import React,{useState ,useEffect } from 'react';
import TaskStatus from '../TaskStatus/TaskStatus';
//import AddingTask from '../AddingTask/AddingTask';
import Event from '../Event/Event';
import CompletedTask from '../CompletedTask/CompletedTask';
import Event1 from '../../assets/Event1.svg';
import Event2 from '../../assets/Event2.svg';
//import meeting from '../../assets/Meeting.svg';
import ToDo from '../ToDo/ToDo';
import CompleteTop from '../CompleteTop/CompleteTop';
import dog from '../../assets/Dog.svg';
import meeting from '../../assets/Meeting.svg';

function AddTask() {
  const [tasks , setTasks] = useState([]);
   const fetchTasks = async () =>
   {
     try 
     {
       const response = await fetch("http://localhost:4000/add_data",{
         method : "GET" ,
         headers : 
         {
          "Content-type" : "application/json"
         },
       });
       if(response.ok)
       {
         const data = await response.json();
         console.log("Get" ,data);
         setTasks(data);
       }
       else
       {
        console.log("Not Get");
      }
     }
     catch(error)
     {
       console.log("Error is:" , error);
     }
   };
   useEffect(() => {
    fetchTasks();
   }, [])
  return (
    <div className="border-2 border-[#A1A3AB] bg-[#F5F8FF] h-full mt-5">
      <div className="w-[95%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 gap-5 py-5">
          <div className="col-span-1 bg-[#F5F8FF] shadow-md">
            {/* <AddingTask/> */}
            <ToDo />
            {
              tasks.map((task) => 
              (
                <Event key={task.id} color="#F21E1E" head={task.title} desc={task.description} image={Event1} priority="moderate" moderate_color="#42ADE2" status="Not Started" created="20/06/2023" />
              ))
            }
            <Event color="#F21E1E" head="Attend Nischal’s Birthday Party" desc="Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements)....." image={Event1} priority="moderate" moderate_color="#42ADE2" status="Not Started" created="20/06/2023" />
            <Event color="#0225FF" head="Landing Page Design for TravelDays" desc="Get the work done by EOD and discuss with client before leaving. (4 PM | Meeting Room)" image={Event2} priority="moderate" moderate_color="#42ADE2" status="In Progress" created="20/06/2023" />
            <hr className=' bg-[#A1A3AB] mt-5' />
            <Event color="#0225FF" head="Presentation on Final Product " desc="Make sure everything is functioning and all the necessities are properly met. Prepare the team and get the documents ready for..." image={meeting} priority="moderate" moderate_color="#42ADE2" status="In Progress" created="20/06/2023" />
          </div>

          <div className="col-span-1 ">
            <div className='bg-[#F5F8FF] shadow-md'>
              <TaskStatus />
            </div>
            <br />
            <br />
            <div className='bg-[#F5F8FF] shadow-md'>
              <CompleteTop />
              <CompletedTask head="Walk the dog" image={dog} desc="Take the dog to the park and bring treats as well." status="Completed" time="2 days ago" />
              <CompletedTask head="Conduct meeting" image={meeting} desc="Meet with the client and finalize requirements." status="Completed" time="2 days ago" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddTask;