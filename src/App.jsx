/* eslint-disable react/jsx-no-undef */
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomePage from "./pages/home/HomePage";
import About from "./pages/about/About";
import Authors from "./pages/authers/Authors";
import Cart from "./pages/cart/Cart";
import Contact from "./pages/contact/Contact";
import Register from "./pages/form/Register";
import Login from "./pages/form/Login";
import Book from "./pages/book/Book";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book/:id" element={<Book />} />
          
        
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
