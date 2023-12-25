const HeaderMiddle = () => {
    return ( 
        <div className="header-middle">
        <div className="header-middle-logo">
          <b>BOOK</b>
          <i className="bi bi-book"></i>
          <b>STORE</b>
        </div>
        <div className="header-middle-search-box">
          <input className="header-middle-search-input" type="search" placeholder="Search..." />
          <i className="bi bi-search"></i>
        </div>
        <div className="header-middle-cart-wrapper">
          <i className="bi bi-cart2"></i>
        </div>
        </div>
      
      
     );
}
 
export default HeaderMiddle;