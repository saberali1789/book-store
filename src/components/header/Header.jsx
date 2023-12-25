import HeaderMiddle from "./HeaderMiddle";
import HeaderTop from "./HeaderTop";
import Navbar from "./Navbar";

import "./header.css";
const Header = () => {
  return (
    <header className="header">
     <HeaderTop />
     <HeaderMiddle />
     <Navbar />
    
     
     
    </header>
  );
};
export default Header;