import React, {useEffect} from "react";
import { NavLink } from "react-router-dom";
import {useDispatch, useSelector } from 'react-redux'
import "./style.scss";

import {actOpenFormLogin} from './../../../commons/modules/LoginForm/acction'

function HeaderNav(props) {
  const dispatch = useDispatch()
  const accountInfo = useSelector(state => state.accountReducer)

  const onHandleOpenFormLogin = () =>{
    dispatch(actOpenFormLogin())
  }


  const renderGuestAction = () =>{
    if(accountInfo.username){
      return (
        <ul className="sub-menu">
          <li><NavLink to="">My Account <span className="number">1</span></NavLink></li>
          <li><NavLink to="">My Invoice </NavLink></li>
          <li><NavLink to="">My Notifycation </NavLink></li>
          <li><NavLink to="">My Purchased product</NavLink></li>
          <li><NavLink to="">Logout</NavLink></li>
        </ul>
      )
    }

    return (
      <ul className="sub-menu">
        <li
          onClick = {onHandleOpenFormLogin}
        ><span>Sign In</span></li>
        <li><NavLink to="signup">Sign Up</NavLink></li>
      </ul>
    );
  }
  
  return (
    <nav className="header__nav">
      <ul>
        <li><NavLink to="/" className="nav-span">Home</NavLink></li>

        <li className="toggle-sub-menu">
          <div className="nav-span">
            <span>About</span>
            <span aria-hidden="true" className="arrow_carrot-right"></span>
            <span aria-hidden="true" className="arrow_triangle-down"></span>
          </div>

          <ul className="sub-menu">
            <li><NavLink to="about">About Me</NavLink></li>
            <li><NavLink to="contact">Contact Us</NavLink></li>
            <li><NavLink to="what-we-offer">What We Offer</NavLink></li>
            <li><NavLink to="booking">Booking</NavLink></li>
          </ul>
        </li>

        <li><NavLink to="/shop" className="nav-span">Shop</NavLink></li>

        <li><NavLink to="/blog-list" className="nav-span">Blog</NavLink></li>

        <li className="toggle-sub-menu">
          <div className="nav-span">
            <span id="toggleLoginForm">My Account</span>
            <span aria-hidden="true" className="arrow_carrot-right"></span>
            <span aria-hidden="true" className="arrow_triangle-down"></span>
          </div>

          {renderGuestAction()}
        </li>

        <li className="bulkhead"><span /></li>

        <li className="toggle-span">
          <div className="header__cart">
            <div>
              <span className="nav-span icon icon-cart"></span>
              <span className="number">0</span>
            </div>
          </div>
        </li>

        <li>
          <button className="header__search">
            <span className="nav-span icon icon-search" />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
