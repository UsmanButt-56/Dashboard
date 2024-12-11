import React from 'react'
import Welcome from '../Welcome/Welcome'
import AddTask from '../AddTask/AddTask'

function Dashboard() {
  return (
    <>
    <div className="w-[98%]">
    <Welcome/>
    <AddTask/>
    </div>
    
    </>
  )
}

export default Dashboard