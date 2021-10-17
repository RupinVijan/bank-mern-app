import React,{useState,useEffect} from 'react'
import "./table.css"
import Tablehead from './Tablehead'
import TableRow from './TableRow'

export default function Home() {
    let [data, setdata] =useState([]);
    async function ne(){
        const dataa= await fetch("/api/use/data");
        const resdata=await dataa.json();
        setdata(resdata)
    }

    useEffect(() => {
        ne();
    }, [])

    return (
        <div>
            <h1 className='topic'>All Transaction History</h1>
            <table>
                <Tablehead/>
                {data.map((element) =>{
                return(
                      <TableRow key={element._id}  from={element.from}  to={element.to} am={element.am} />
                )})}
            </table>
        </div>
    )
}
