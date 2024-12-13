import React, { useState } from 'react'
import document from '../../assets/Documents.svg';
import assignment from '../../assets/Assignments.svg';
import MyTaskAdd from './MyTaskAdd';
import Event from '../Event/Event';
import Dustbin from './Dustbin';
function MyTask() {
    const [selectedTask, setSelectedTask] = useState({
        color: "#F21E1E",
        head: "Submit Documents",
        desc: "Make sure to submit all the necessary docum.....",
        image: document,
        priority: "Extreme",
        moderate_color: "#F21E1E",
        status: "Not Started",
        created: "20/06/2023",
        title: "Document Submission.",
        Objective:"To submit required documents for something important",
        Task_Description:"Review the list of documents required for submission and ensure all necessary documents are ready. Organize the documents accordingly and scan them if physical copies need to be submitted digitally. Rename the scanned files appropriately for easy identification and verify the accepted file formats. Upload the documents securely to the designated platform, double-check for accuracy, and obtain confirmation of successful submission. Follow up if necessary to ensure proper processing.",
        Notes: 
        [
            'Ensure that the documents are authentic and up-to-date.',
            'Maintain confidentiality and security of sensitive information during the submission process.',
            'If there are specific guidelines or deadlines for submission, adhere to them diligently.'
        ],
        Deadline: "End of Day"
    })
    const handleClick = (dataevent) =>
    {
        setSelectedTask(dataevent);
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 h-[837px]">
            <div className="border-2 border-[#A1A3ABA1] rounded-lg">
                <div className="w-11/12 mx-auto pt-5 ">
                    <p className='font-montserrat font-semibold text-[16px] leading-[19.5px] ps-3'>
                        <span className="border-b-2 border-[#F24E1E]">My</span> Tasks
                    </p>
                </div>
                <Event color="#F21E1E" head="Submit Documents" desc="Make sure to submit all the necessary docum....." image={document} priority="Extreme" moderate_color="#F21E1E" status="Not Started" created="20/06/2023"
                    onClick={() => handleClick({
                        color: "#F21E1E",
                        head: "Submit Documents",
                        image: document,
                        priority: "Extreme",
                        moderate_color: "#F21E1E",
                        status: "Not Started",
                        created: "20/06/2023",
                        title: "Document Submission.",
                        Objective:"To submit required documents for something important",
                        Task_Description:"Review the list of documents required for submission and ensure all necessary documents are ready. Organize the documents accordingly and scan them if physical copies need to be submitted digitally. Rename the scanned files appropriately for easy identification and verify the accepted file formats. Upload the documents securely to the designated platform, double-check for accuracy, and obtain confirmation of successful submission. Follow up if necessary to ensure proper processing.",
                        Notes: [
                            'Ensure that the documents are authentic and up-to-date.',
                            'Maintain confidentiality and security of sensitive information during the submission process.',
                            'If there are specific guidelines or deadlines for submission, adhere to them diligently.'
                        ],
                        Deadline: "End of Day"
                    })} />
                <Event color="#0225FF" head="Complete assignments" desc="The assignments must be completed to pass final year...." image={assignment} priority="Moderate" moderate_color="#42ADE2" status="Not Started" created="20/06/2023" />

            </div>
            <div className="border-2 border-[#A1A3ABA1] rounded-lg" >
                <MyTaskAdd event={selectedTask} />
                {/* <Dustbin/> */}
            </div>
        </div>
    )
}

export default MyTask;