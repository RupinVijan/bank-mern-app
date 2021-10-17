import React,{useState,useEffect} from 'react'
import Usertablehead from "./Usertablehead"
import Usertablerow from "./Usertablerow"
import "./table.css"

export default function User() {
    let [data, setdata] =useState([]);
    async function ne(){
        const dataa= await fetch("/api/use/data/user");
        const resdata=await dataa.json();
        setdata(resdata)
    }

    useEffect(() => {
        ne();
    }, [])
    return (
        <div>
            <h1 className='topic'>Our Current Users</h1>
            <table>
                <Usertablehead />
                {data.map((element) =>{
                return(
                      <Usertablerow key={element._id}  sno={element.sno} user={element.user} />
                )})}
            </table>
        </div>
    )
}
