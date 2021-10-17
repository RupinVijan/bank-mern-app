import React from 'react'
import {Link} from  "react-router-dom"
import "./table.css"

export default function TableRow(props) {
    return (
        <tr>
        <td>{props.sno}</td>
        <td>{props.user}</td>
        <td>
          <Link to={`/user/${props.user}`}><button class="btn" >Transaction History</button></Link>
        </td>
      </tr>
    )
}