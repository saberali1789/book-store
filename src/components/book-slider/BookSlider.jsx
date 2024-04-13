import { useState } from "react";
import "./book-slider.css";
import Rating from "./Rating";
import Modal from "../modal/Modal";

const BookSlider = ({ data }) => {
   const [slideIndex, setSlideIndex] = useState(0);
   const [openModal, setOpenModal] = useState(false);
   const [bookData, setBookData] = useState(null);

  //  Handle modal
  const handleModal = (book) => {
    setOpenModal(true);
    setBookData(book);
  }
  
   //  Handle click
   const handleClick = (direction) => {
    if (direction === 'left'){
        setSlideIndex(slideIndex - 1)
    } else {
        setSlideIndex(slideIndex + 1)
    }
   }

    return (
    <div className="book-slider-container">
      {slideIndex >= 0 && <i onClick={() => handleClick('left')} className="bi bi-chevron-left book-slider-arrow-left"></i>}
      <div style={{transform:`translatex(${slideIndex * -345}px)`}} className="book-slider-wrapper">
        {data.map(item =>
            <div key={item.id} className="book-slide-item">
                <img src={`/books/${item.image}`} alt={item.title} className="book-slide-item-img"/>
                <h2 className="book-slide-item-title">{item.title}</h2>
                
                <Rating rating={item.rating} review={item.review} />
                <div className="book-slide-item-price">${item.price}</div>
                <div className="book-slide-icon-wrapper">
                    <i onClick={()=> handleModal(item)} className="bi bi-eye-fill"></i>
                    <i className="bi bi-cart-plus"></i>
                </div>
            </div>)}
      </div>
      {slideIndex <= data.length-2 &&<i onClick={() => handleClick('right')} className="bi bi-chevron-right book-slider-arrow-right"></i>}
      {openModal && <Modal bookData={bookData} setOpenModal={setOpenModal}/>}
    </div>
  );
};

export default BookSlider;
