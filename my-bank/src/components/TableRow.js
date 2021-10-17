import React from 'react'
import "./table.css"
import {Link} from "react-router-dom"

export default function TableRow(props) {
    return (
        <tr>
        <td>{props.from}</td>
        <td>{props.to}</td>
        <td>{props.am}</td>
        <td>
          <Link to="/user"><button class="btn">Transaction History</button></Link>
        </td>
      </tr>
    )
}
