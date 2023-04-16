import React, { useState } from 'react'

const AgeCalculaor = () => {
    
    // const [dateOfYear, setDateOfYear] = useState(null);
    const [inputDate, setInputDate] = useState(null)
    const minDate =  new Date();
    const maxDate = new Date().toISOString().substr(0, 10);
    const handleChange = (e) =>{
        console.log(e.target.value)
        setInputDate(new Date(e.target.value));
     
    }
    // const year = currentYear - inputDate.getFullYear()
//     let dateOffset = (24*60*60*1000) *5; //5 days
    // minDate.setTime(minDate.getTime() - dateOffset);
// console.log(minDate)

minDate.setDate(minDate.getDate() - 11);
const minDateString = minDate.toISOString().substr(0, 10);
console.log(minDateString,"ddddddddd",maxDate)



    
  return (
    <React.Fragment>
        Enter date Of birth
        <input type="Date" onChange={(e)=>{handleChange(e)}} min={minDateString} max={maxDate}/>
        {inputDate && inputDate !=null ? inputDate.getFullYear() :""}
    </React.Fragment>
  )
}

export default AgeCalculaor