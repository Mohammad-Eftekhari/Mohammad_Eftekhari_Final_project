import React from "react";
import './Header.style.css';
import {FaShoppingCart, FaUserAlt ,FaSearch} from 'react-icons/fa'

const Header = () => {
  return (
    <div className="my-header d-flex justify-content-between align-items-center px-4">
      <div className="header-logo">
        <h2>روشان</h2>
      </div>
      <div className="header-search-box">
        <div className="search-icon">
          <FaSearch />
        </div>
        <input type="text" placeholder="جستجو..." />
      </div>
      <div className="header-actions d-flex justify-content-between">
        <div className="header-action-basket header-icon">
          <FaShoppingCart />
        </div>
        <div className="header-action-user header-icon">
          <FaUserAlt />
        </div>
      </div>
    </div>
  );
};

export default Header;
