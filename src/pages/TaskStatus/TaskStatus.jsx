import React from 'react'
import taskstatus from '../../assets/taskstatus.svg';
import Progress from '../Progress/Progress';
import CompletedTask from '../CompletedTask/CompletedTask';
import CompleteTop from '../CompleteTop/CompleteTop';
import dog from '../../assets/Dog.svg';
import meeting from '../../assets/Meeting.svg';
function TaskStatus() {
  return (
    <>
    <div className='w-11/12 mx-auto py-5'>
      <div className='flex gap-2'>
        <img src={taskstatus} alt="" />
        <span className='text-[#FF6767]'>Task Status</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 py-10 gap-y-14">
        <div className="col-span-1 flex justify-center sm:justify-start">
          <Progress percentage={84} color="#05A301" rotation="-rotate-360" text="Completed"/>
        </div>
        <div className="col-span-1 flex justify-center sm:justify-start">
          <Progress percentage={46} color="#0225FF" rotation="rotate-90" text="In Progress"/>
        </div>
        <div className="col-span-1 flex justify-center sm:justify-start">
          <Progress percentage={13} color="#F21E1E" rotation="-rotate-90" text="Not_Started"/>
        </div>
      </div>
    </div>
    <br/>
    {/* <div className='h-5 bg-[#F5F8FF] shadow-[0px_-2px_4px_rgba(0,0,0,0.1),_0px_2px_4px_rgba(0,0,0,0.1)]'></div> */}
    {/* <div className='w-11/12 mx-auto py-2 bg-[#F5F8FF] '> */}
    {/* <CompleteTop/> */}
    {/* </div> */}
    
    {/* <CompletedTask head="Walk the dog" image={dog} desc="Take the dog to the park and bring treats as well." status="Completed" time="2 days ago"/>
    <CompletedTask head="Conduct meeting" image={meeting} desc="Meet with the client and finalize requirements." status="Completed" time="2 days ago"/> */}
    </>
  )
}

export default TaskStatus;