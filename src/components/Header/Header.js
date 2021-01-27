import React from 'react';
import { useSelector } from 'react-redux';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header(props) {
  const basket = useSelector((state) => state.basket);

  return (
    <div>
      <nav className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon"
          />
        </Link>

        <div className="header__search">
          <input
            className="header__SearchInput"
            type="text"
            value={props.value}
            onChange={props.onChange}
          />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          <div className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Hello </span>
              <span className="header__optionLineTwo">Sign in</span>
            </div>
          </div>

          <div className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Return</span>
              <span className="header__optionLineTwo"> & Orders</span>
            </div>
          </div>
        </div>

        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">
              <span className="header__count">
                {!basket ? <span>0</span> : <span>{basket.length}</span>}
              </span>
            </span>
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
