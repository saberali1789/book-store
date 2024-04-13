import React from "react";
import BookSlider from "../../components/book-slider/BookSlider";
import HeadingTitle from "../../components/haeding-title/HeadingTitle";
import Services from "../../components/services/Services";
import Slider from "../../components/slider/Slider";
import { books } from "../../data/books";
const HomePage = () => {
  return (
    <div>
      <Slider />
      <Services />
      <HeadingTitle title="Most Gifted" />
      <BookSlider data={books} />
      <HeadingTitle title="Best Seller" />
      <BookSlider data={books} />
      <HeadingTitle title="Most Wished for" />
      <BookSlider data={books} />
    </div>
  );
};

export default HomePage;
