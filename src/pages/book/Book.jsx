// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useParams } from 'react-router-dom'

const Book = () => {

  const Book = () => {
    const { id } = useParams();
    console.log(id); // تأكد من أن 
  return (
    <div><h1>Book{id}</h1></div>
  )
}

export default Book