import React, { useState } from 'react'

const BookEdit = ({book, onEdit, onSubmit}) => {
  const [title,setTitle]=useState(book.title)
  console.log("book",book.id,book.title)
  const handleChange = (e) =>{
    setTitle(e.target.value)
    
  } 
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('New Title',title)
    onEdit(book.id, title)
    // onSubmit();
    setTitle('')
    
  } 
  return (
    <form>
      <label>Title</label>
      <input className='input' value={title} onChange={handleChange}/>
      <button className='button is-primary' onClick={handleSubmit}>Save</button>
    </form>
  )
}

export default BookEdit