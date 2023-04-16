import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap'
function useSomething({initialCount}) {
    const [count, setCount] = useState(initialCount);
    useEffect(()=>{
        console.log(count)
    },[count])
    const handleClick = ()=>{
        setCount(count+1)
    }
    return{
        count,
        handleClick
    }
}
const CounterPage = ({initialCount}) => {
   const {count, handleClick}=useSomething({initialCount})
  
  
  return (
      <React.Fragment>
          <div>CounterPage is {count}</div>
          <Button onClick={handleClick}>increment</Button>
      </React.Fragment>
  )
}

export default CounterPage