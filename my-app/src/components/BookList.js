import React from 'react'
import BookShow from './BookShow'

const BookList = (props) => {
    const {Books,onDelete, onEdit} = props
    // const deletBook = (id) =>{
    //     props.onDelete(id)
    // }
    
    const renderedBooks = Books.map((each)=>{
        return <BookShow  key ={each.id} book ={each} onDelet ={onDelete} onEdit={onEdit}/>
    })
  return (
      <>
      {renderedBooks}
      </>
  )
}

export default BookList