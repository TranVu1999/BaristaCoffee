import React, { Component } from "react";
import "./style.scss";
import logo from "./../../../assets/Images/logo/logo-1.png";
import { NavLink } from "react-router-dom";
import CartHeader from "../CartHeader";
import {connect} from 'react-redux';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpenResMenu : false
    }
  }

  handleToggleLoginPopup = (event) => {
    this.props.onLogin(true);
    event.preventDefault();
  };

  handleGuestAction = (onOpenLogin) => {
    const accountInfo = JSON.parse(localStorage.getItem("accountInfo"));
    if (!accountInfo) {
      return (
        <ul className="sub-menu">
          <li>
            <span
              href="/#"
              onClick={(e) => {
                onOpenLogin(true);
              }}
            >
              Sign In
            </span>
          </li>
          <li>
            <a href="/#">Sign Up</a>
          </li>
        </ul>
      );
    }

    return (
      <ul className="sub-menu">
        <li>
          <NavLink to="my-account">TranVudpqn123</NavLink>
        </li>
      </ul>
    );
  };

  // open responsive mene
  handleToggleMenu = () =>{
    this.setState({isOpenResMenu: !this.state.isOpenResMenu});
  }

  render() {
    let { onOpenLogin, amountCart } = this.props;
    const {isOpenResMenu} = this.state;

    return (
      <header className="header">
        <div className="d-flex-between px-25 header__content">
          <div className="header--nav-toggle">
            <input 
              type="checkbox" 
              id="toggle-menu" 
              onChange = {this.handleToggleMenu}
            />
            <label htmlFor="toggle-menu" className="toggle">
              <span />
              <span />
              <span />
              <span />
            </label>
          </div>

          <div className="header__logo">
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <nav 
            className = {isOpenResMenu ? "header__nav header--responsive" : "header__nav"}
          >
            <ul>
              <li>
                <NavLink to = "/">Home</NavLink>
              </li>
              <li className="toggle-sub-menu">
                <div>
                  <span id="toggleLoginForm">About</span>
                  <span aria-hidden="true" className="arrow_carrot-right"></span>
                  <span aria-hidden="true" class="arrow_triangle-down"></span>
                </div>
                <ul className="sub-menu">
                  <li>
                    <NavLink to="about">About Me</NavLink>
                  </li>
                  <li>
                    <NavLink to="contact">Contact Us</NavLink>
                  </li>
                  <li>
                    <NavLink to="what-we-offer">What We Offer</NavLink>
                  </li>
                  <li>
                    <NavLink to="booking">Booking</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to = "/shop">Shop</NavLink>
              </li>
              <li>
              <NavLink to = "/blog-list">Blog</NavLink>
              </li>
              <li className="toggle-sub-menu">
                <div>
                  <span id="toggleLoginForm">My Account</span>
                  <span aria-hidden="true" className="arrow_carrot-right"></span>
                  <span aria-hidden="true" class="arrow_triangle-down"></span>
                </div>
                
                {this.handleGuestAction(onOpenLogin)}
              </li>

              <li className="bulkhead">
                <span />
              </li>
              <li class="toggle-span">
                <div className="header__cart">
                  <div>
                    <span class="icon icon-cart"></span>
                    <span class="number">{amountCart}</span>
                  </div>

                  <CartHeader/>
                </div>
              </li>
              <li>
                <a href="/#" className="header__search">
                  <span className="icon icon-search" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state =>{
  let amountCart = 0;
  for(let item of state.cartReducer.data){ amountCart += item.amount}
  return {
    amountCart
  }
}
export default connect(mapStateToProps) (Header)
