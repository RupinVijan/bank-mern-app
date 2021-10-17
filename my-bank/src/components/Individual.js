import React , {useState,useEffect}from 'react'
import "./table.css"
import Tablehead from './Tablehead';
import TableRow from './TableRow';

export default function Individual(props) {
    let [data, setdata] =useState([]);
    let [data1, setdata1] =useState([]);
    async function ne(props){
        const dataa= await fetch(props.name);
        const resdata=await dataa.json();
        setdata(resdata[0])
        setdata1(resdata[1])
    }

    useEffect(() => {
        ne(props);
    }, [props])
    return (
        <div>
            <h1 className='topic'>{props.user.toUpperCase()}'s Transaction History</h1>
            <table>
                <Tablehead/>
                {data.map((element) =>{
                return(
                      <TableRow key={element._id}  from={element.from}  to={element.to} am={element.am} />
                )})}
                {data1.map((element) =>{
                return(
                      <TableRow key={element._id}  from={element.from}  to={element.to} am={element.am} />
                )})}
                
            </table>
        </div>
    )
}
