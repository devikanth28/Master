import React, { useState } from 'react'
import { Button } from 'reactstrap';

const ProfileCard = (props) => {
  const {color,fontSize,...rest} = props;
   const style={color : color,fontSize:fontSize,border:rest.border}
  //  const [value, setValue] =useState("");
   const [selectedFruit, setSelectedFruit] = useState("");
   const data={}
   const handleChange = (e) =>{
    // setValue(e.target.value)
    console.log("target",e)
    data[e.target.id]= e.target.value;
    // setSelectedFruit(e.target.value)
   }
   const showData =()=>{
   console.log("dinehs"+JSON.stringify(data));
   }
  return (
    <React.Fragment>
      <div style={style}>ProfileCard</div>
      <h1>{rest.rest.id}</h1>
    name:<input type="text"  onChange={(e)=>{handleChange(e)}} id="name"/>
    phoneNumber:<input type="text"  onChange={(e)=>{handleChange(e)}} id="phoneNumber"/>
    address:<input type="text"  onChange={(e)=>{handleChange(e)}} id="address"/>
    {/* <select value={selectedFruit} onChange={(e)=>{handleChange(e)}}>
  <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option selected value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select> */}
<Button onClick={()=>showData()}>showData</Button>
    </React.Fragment>
    
  )
}

export default ProfileCard