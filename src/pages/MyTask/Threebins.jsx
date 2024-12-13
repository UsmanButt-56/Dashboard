import React from 'react'
import img1 from '../../assets/Dustbin.svg';
import img2 from '../../assets/Edit.svg';
import img3 from '../../assets/Icon.svg';

function Threebins() {
    return (
        <>
            <div className="dustbin flex space-x-2 justify-end mx-3 py-3">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
            </div>
        </>
    )
}

export default Threebins;