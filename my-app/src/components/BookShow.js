import React, { useState } from 'react'
import BookEdit from './BookEdit'

const BookShow = ({book,onDelet, onEdit}) => {
  const [showEdit, setShowEdit] = useState(false)
   const handleDelete = () =>{
       onDelet(book.id)
   }
   const handleEdit = () =>{
      setShowEdit(!showEdit) 
   }
   const handleSubmit = () =>{
    setShowEdit(false)
 }
   let content= <h3>{book.title}</h3>
   if(showEdit){
     content = <BookEdit book={book} onEdit={onEdit} onSubmit={handleSubmit}/>
   }
  
  return (
    <div className='bookStore'>
        
            <h3>{content}</h3>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        
    </div>
  )
}

export default BookShow