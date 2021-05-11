import React, {useEffect} from "react";
import { NavLink } from "react-router-dom";
import {useDispatch, useSelector } from 'react-redux'
import "./style.scss";

import {actOpenFormLogin} from './../../../commons/modules/LoginForm/acction'
import HeaderCart from "../HeaderCart";

function HeaderNav(props) {
  const dispatch = useDispatch()
  const accountInfo = useSelector(state => state.accountReducer)
  
  const cartInfo = useSelector(state => state.cartReducer)

  const onHandleOpenFormLogin = () =>{
    dispatch(actOpenFormLogin())
  }

  const onHandleLogout = () =>{
    window.location.reload(false);
  }

    const getAmountNew = (listData) =>{
        let amount = 0
        for(let item of listData){
        if(item.new){
            amount++
        }
        }
        return amount
    }

    const renderGuestAction = () =>{
        if(accountInfo.username){
            const amountNotifyInvoice = getAmountNew(accountInfo.invoices)
            const amountNotify = getAmountNew(accountInfo.notifies)
            
            return (
                <ul className="sub-menu">
                    <li><NavLink to="/account/infomation">My Account </NavLink></li>

                    <li>
                        <NavLink to="/account/invoice">
                            My Invoice 
                            {amountNotifyInvoice > 0 ? (<span className="number">{amountNotifyInvoice}</span>) : ""}
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/account/notify">
                            My Notifycation 
                            {amountNotify > 0 ? (<span className="number">{amountNotify}</span>) : ""}
                        </NavLink>
                    </li>

                    <li><a href="http://localhost:3800/">My Shop</a></li>
                    <li
                        onClick = {onHandleLogout}
                    ><span>Logout</span></li>
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

  const getAmountProductInCart = () =>{
    let sum = 0
    
    for(let item of cartInfo.data){
      sum += item.amount
    }

    return sum
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

        <li><NavLink to="/mall" className="nav-span">Mall</NavLink></li>

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
              <span className="number">{getAmountProductInCart()}</span>
            </div>

            <HeaderCart
              listProduct = {cartInfo.data}
            />
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
