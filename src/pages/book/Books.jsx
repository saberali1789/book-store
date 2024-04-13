import React from 'react'
import { useParams } from 'react-router-dom'
import { books } from './../../data/books';
import Rating from '../../components/book-slider/Rating'


const Books = () => {

  const {id} = useParams()
  
  const book =  books.find(b => b.id === +id);

    return (
    <div className='book'>
      <div className="book-content">
        <img src={`/book/${book.image}`} alt={book.title} className='book-content-img' />
        <div className="book-content-info">
          <h1 className="book-title">{book.title}</h1>
          <div className="book-author">
            By <span>{book.author}</span> (Author)
          </div>
          <Rating rating={book.rating} review={book.reviews} />
        </div>
      </div>
    </div>
  )
}

export default Books