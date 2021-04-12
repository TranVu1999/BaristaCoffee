import React from 'react'
import {NavLink} from 'react-router-dom'

import logo from "./../../../assets/Images/logo/logo-1.png"
import './style.scss'

export default function HeaderLogo() {
    return (
        <div className="header__logo">
            <NavLink to="/">
            <img src={true ? logo : "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851625/BaristaCoffee/logo/logo-2_x72h08.png"} alt="logo" />
            
            </NavLink>
        </div>
    )
}
