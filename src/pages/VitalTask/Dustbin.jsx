import React from 'react'
import img1 from '../../assets/Dustbin.svg';
import img2 from '../../assets/Edit.svg';
function Dustbin() {
  return (
    <>
    <div className="dustbin flex space-x-4 justify-end mx-3 py-3">
    <img src={img1} alt="" />
    <img src={img2} alt="" />
    </div>
    </>
  )
}

export default Dustbin;