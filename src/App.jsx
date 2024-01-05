/* eslint-disable react/jsx-no-undef */
import "./App.css";
import BookSlider from "./components/book-slider/BookSlider";
import Header from "./components/header/Header";
import Services from "./components/services/Services";
import Slider from "./components/slider/Slider";
import {books} from './data/books'

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Services />
      <BookSlider data={books} />
    </>
  );
}

export default App;
