
import React, { useState } from 'react'

export default function Potens() {
    const [value, setValue] = useState(1)
    const [messurement, setMessurment] = useState("A")

    
    function cleanNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }

    function cleanNumberZero(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }

   
  
  return (
    <div>
        <h2>Potents hjælper</h2>
        
        <div>
               <label>Målenhed: </label>
               <select onChange={(e) => setMessurment(e.target.value)}>
            <option>A</option>
            <option>W</option>
            <option>Ω</option>
            <option>V</option>
            <option>W</option>
            <option>I</option>
        </select>
        </div>
        <div>
            <label>Mængde i {messurement}: </label>
        <input type={"number"} defaultValue={messurement} onChange={(e) => {setValue(e.target.value)}} />
        </div>
        <table>
            <tbody>

        <tr style={{border: "1px solid black"}}>
                <td style={{border: "1px solid black"}}>µ{messurement} (mikro {messurement})</td>
                <td style={{border: "1px solid black"}}>m{messurement} (mili {messurement})</td>
                <td style={{border: "1px solid black"}}>{messurement}</td>
                <td style={{border: "1px solid black"}}>k{messurement} (kilo {messurement})</td>
                <td style={{border: "1px solid black"}}>M{messurement} (Mega {messurement})</td>
            </tr>
            <tr style={{border: "1px solid black"}}>
                <td style={{border: "1px solid black"}}>{cleanNumber(value*1000000) }</td>
                <td style={{border: "1px solid black"}}>{cleanNumber(value*1000) }</td>
                <td style={{border: "1px solid black"}}>{cleanNumber(value)}</td>
                <td style={{border: "1px solid black"}}>{cleanNumberZero(value/1000) }</td>
                <td style={{border: "1px solid black"}}>{cleanNumberZero(value/1000000) }</td>
            </tr>
            </tbody>
        </table>


        

    </div>
  )
}
