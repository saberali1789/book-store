import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-social-media">
        <div className="footer-social-media-text">Follow us on social media</div>
        <div className="footer-social-media-icons">
          <div className="footer-social-media-icon">
            <i style={{ color: "red" }} className="bi bi-instagram"></i>
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: "blue" }} className="bi bi-facebook"></i>
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: "red" }} className="bi bi-youtube"></i>
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: "blue" }} className="bi bi-twitter"></i>
          </div>
          <div className="footer-social-media-icon">
            <i style={{ color: "darkblue" }} className="bi bi-telegram"></i>
          </div>
        </div>
      </div>
      <div className="footer-links-wrapper">
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Usefull links</h3>
          <ul className="footer-links">
            <li className="footer-link">Home</li>
            <li className="footer-link">Authors</li>
            <li className="footer-link">About Us</li>
            <li className="footer-link">Contact Us</li>
            <li className="footer-link">Register</li>
          </ul>
        </div>
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Contact information</h3>
          <div className="footer-adress-wrapper">
            <div className="footer-adress-item">
              <i className="bi bi-geo-alt-fill"></i>
              Egypt - Giza - Baharia
            </div>
            <div className="footer-adress-item">
              <i className="bi bi-telephone-fill"></i>
              123-456-789
            </div>
            <div className="footer-adress-item">
              <i className="bi bi-envelope-fill"></i>
              bookstoreapp@gmail.com
            </div>
          </div>
        </div>
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">About Us</h3>
          <p className="footer-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            laboriosam debitis cum hic molestias commodi voluptatibus at
            eligendi. Ex pariatur quas magni nostrum corrupti, laudantium
            accusantium eum ea architecto tempora? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quaerat cumque iste cupiditate
            explica
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
