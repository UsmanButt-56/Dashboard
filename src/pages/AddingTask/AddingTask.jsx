import React from 'react'
import Pending from '../../assets/Pending.svg';
import plus_sign from '../../assets/plus-sign.svg'
import Event from '../Event/Event';
import ToDo from '../ToDo/ToDo';
import dog from '../../assets/Dog.svg';
import CompletedTask from '../CompletedTask/CompletedTask';
function AddingTask() {
    return (
        <>
            
                <ToDo />
            <div className=''>
                <Event />
                {/* <CompletedTask head="Walk the dog" image={dog} desc="Take the dog to the park and bring treats as well." status="Completed" time="2 days ago"/> */}
            </div>
        </>
    )
}

export default AddingTask;