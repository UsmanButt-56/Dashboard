import React, { useState } from 'react'
import dog from '../../assets/Dog.svg';
import CompletedTask from '../CompletedTask/CompletedTask';
import Event from '../Event/Event';
import Grandma from '../../assets/grandma.svg';
import VitalTaskAdd from './VitalTaskAdd';
function VitalTask() {
    const [selectedEvent, setSelectedEvent] = useState({
        color: "#F21E1E",
        head: "Walk the dog",
        desc: "Take the dog to the park and bring treats as well.",
        image: dog,
        priority: "Extreme",
        moderate_color: "#F21E1E",
        status: "Not Started",
        created: "20/06/2023",
        tasks:
            [
                'Listen to a podcast or audiobook',
                'Practice mindfulness or meditation',
                'Take photos of interesting sights along the way',
                'Practice obedience training with your dog',
                'Chat with neighbors or other dog walkers',
                'Listen to music or an upbeat playlist',
            ]
    });
    const handleEventClick = (eventData) => {
        console.log("Event clicked: ", eventData);
        setSelectedEvent(eventData);
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 h-[837px]">
            <div className="border-2 border-[#A1A3ABA1] rounded-lg">
                <div className="w-11/12 mx-auto pt-5 ">
                    <p className='font-montserrat font-semibold text-[16px] leading-[19.5px] ps-3'>
                        <span className="border-b-2 border-[#F24E1E]">Vital</span> Tasks
                    </p>
                </div>
                <Event color="#F21E1E" head="Walk the dog" desc="Take the dog to the park and bring treats as well." image= {dog} priority="Extreme" moderate_color="#F21E1E" status="Not Started" created="20/06/2023"
                    onClick={() => handleEventClick({
                        image: dog,
                        head: "Walk the dog",
                        desc: "Take the dog to the park and bring treats as well.",
                        text: "Take Luffy and Jiro for a leisurely stroll around the neighborhood. Enjoy the fresh air and give them the exercise and mental stimulation they need for a happy and healthy day. Don't forget to bring along squeaky and fluffy for some extra fun along the way!",
                        tasks:
                            [
                                'Listen to a podcast or audiobook',
                                'Practice mindfulness or meditation',
                                'Take photos of interesting sights along the way',
                                'Practice obedience training with your dog',
                                'Chat with neighbors or other dog walkers',
                                'Listen to music or an upbeat playlist',
                            ],
                        color: "#F21E1E",
                        moderate_color: "#F21E1E",
                        priority: "Extreme",
                        moderate_color: "#F21E1E",
                        status: "Not Started",
                        created: "20/06/2023"
                    })} />
                <Event color="#0225FF" head="Take grandma to hospital" desc="Go back home and take grandma to the hosp...." image={Grandma} priority="Moderate" moderate_color="#42ADE2" status="Not Started" created="20/06/2023" 
                onClick={() =>handleEventClick({
                        image: Grandma,
                        head: "Take grandma to hospital",
                        desc: "Go back home and take grandma to the hosp....",
                        text: "Take Luffy and Jiro for a leisurely stroll around the neighborhood. Enjoy the fresh air and give them the exercise and mental stimulation they need for a happy and healthy day. Don't forget to bring along squeaky and fluffy for some extra fun along the way!",
                        tasks:
                            [
                                'Listen to a podcast or audiobook',
                                'Practice mindfulness or meditation',
                                'Take photos of interesting sights along the way',
                                'Practice obedience training with your dog',
                                'Chat with neighbors or other dog walkers',
                                'Listen to music or an upbeat playlist',
                            ],
                        color:"#42ADE2",
                        moderate_color:"#0225FF",
                        priority: "Moderate",
                        status: "Not Started",
                        created: "20/06/2023"
                })}/>

            </div>
            <div className="border-2 border-[#A1A3ABA1] rounded-lg">
                <VitalTaskAdd event={selectedEvent} />
            </div>
        </div>
    )
}

export default VitalTask;