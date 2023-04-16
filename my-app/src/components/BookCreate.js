import React, { useState } from 'react'

const BookCreate = ({onCreate}) => {
    const [title, setTitle] = useState('');
    const handlaChange = (e) =>{
        setTitle(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        onCreate(title)
    }
  return (
    // <div>BookCreate</div>
    <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={title} onChange={handlaChange}/>
        <button>Crete!</button>
    </form>

  )
}

export default BookCreate