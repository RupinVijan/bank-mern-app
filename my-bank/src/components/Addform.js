import "./navbar.css"
import "react-router-dom"
import React,{useState} from 'react'
import Input from "./Input"

export default function Addform() {
    const [from, setfrom] = useState("");
    const [too, settoo] = useState("");
    const [am, setam] = useState("");
    return (
        <div>
            <form method="POST"  onSubmit={async (e) => {
                e.preventDefault();

                const res = await fetch ('/api/use',{
                    method:"POST",
                    headers : { 
                        'Content-Type': 'application/json',
                       },
                    body:JSON.stringify({
                        "from":from,
                        "to":too,
                        "am":am
                    })
                })
                const dat=await res.json();
                console.log(dat);
                window.alert("donecdone")
                setam("")
                settoo("")
                setfrom("")
            }
            }>
                <h1>Add a Transaction</h1>
            <Input name="tfrom" place="Transfer from  " val={from} datr={setfrom}/>
            <Input name="tto" place="Transfer to  " val={too} datr={settoo}/>
            <Input name="am" place="amount  " val={am} datr={setam}/>
            <button className="btn" type="submit">Submit</button>

            </form>
        </div>
    )
}
