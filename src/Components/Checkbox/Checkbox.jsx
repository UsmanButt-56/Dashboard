import React from 'react'

function Checkbox({ color, name, id }) {
    return (
        <>
            <div className="w-[7px] h-[7px] rounded-2xl" style={{ backgroundColor: color }}></div>
            <label htmlFor="" for={id}>{name}</label>
            <input id={id} type="checkbox" />

        </>
    )
}

export default Checkbox;