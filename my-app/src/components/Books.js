import React, { useState } from 'react'
import BookCreate from './BookCreate'
import BookList from './BookList'
const Books = () => {
    const [Books, setBooks] = useState([]);
    const [id, setId] = useState(0);
    const CreateBook = (title) =>{
        // console.log(title,[...Books,{id:setId(id+1),title:title}]);
        setBooks([...Books,
            {id:Math.round(Math.random() * 9999),title:title}
        ]);
        // setId(id+1)
        // setId(id+1)
    }

    const deleteBookById = (deletedId) =>{
        const updatedBooks =  Books.filter((book)=>{
            return book.id !== deletedId
        })
        setBooks(updatedBooks)
    }
    const editBookById = (editId, newTitle)=>{
        const updatedBooks = Books.map((book)=>{
            if(book.id === editId){
                return {...book, title:newTitle}
            }
        })
        setBooks(updatedBooks)
    }
  return (
      <>
          <BookCreate onCreate={CreateBook} />
          <BookList Books = {Books} onDelete = {deleteBookById} onEdit = {editBookById}/>
      </>
  )
}

export default Books