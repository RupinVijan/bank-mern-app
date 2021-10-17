import React from 'react'

export default function Input(props) {
    return (
        <div>
            <label htmlFor={props.name}>{props.place}</label>
            <input type="text" value={props.val} placeholder={props.place} onChange={(e)=>{
                props.datr(e.currentTarget.value);
            }} id={props.name} name={props.name} className='inp'/>
        </div>
    )
}
