import React from 'react'

function Progress({ percentage, color ,rotation , text}) {
  const circleRadius = 16; // Radius of the circle
  const circumference = 2 * Math.PI * circleRadius; // Circumference of the circle
  const offset = circumference - (percentage / 100) * circumference; // Calculate stroke-dashoffset based on percentage
  return (
   <>
{/* <!-- Circular Progress --> */}
<div class="relative size-[100px] w-11/12 mx-auto">
  <svg class={`size-full ${rotation}`} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
    {/* <!-- Background Circle --> */}
    <circle 
    cx="18" 
    cy="18" 
    r={circleRadius} 
    fill="none" 
    className="stroke-current text-gray-200 dark:text-neutral-700" 
    stroke-width="4"></circle>
    {/* <!-- Progress Circle --> */}
    <circle 
    cx="18" 
    cy="18" 
    r={circleRadius} 
    fill="none" 
    stroke={color}
    stroke-width="4" 
    strokeDasharray={circumference}
    strokeDashoffset={offset}
    strokeLinecap="round"></circle>
  </svg>

  {/* <!-- Percentage Text --> */}
  <div class="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
    <span  class={`text-center text-2xl font-bold text-black`}>{percentage}%</span>
  </div>
  <div className="flex items-center justify-center gap-3 mt-5">
   <div className={`w-[7px] h-[7px] rounded`} style={{ backgroundColor: color }}></div>
   {/* style={{ color }} */}
   <span>{text}</span>
  </div>
</div>
{/* <!-- End Circular Progress --> */}
   </>
  )
}

export default Progress;