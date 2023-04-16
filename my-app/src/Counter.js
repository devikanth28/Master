import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const increment = () => {
    setCounter(counter + 1)
  }
  return (
    <React.Fragment>

      <div>value:{counter}</div>
      <div onClick={()=>{increment()}}>Counter:{counter}</div>
    </React.Fragment>
  )
}

export default Counter