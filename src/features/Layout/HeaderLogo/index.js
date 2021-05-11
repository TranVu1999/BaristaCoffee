import React from 'react';
import {useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'
import logo from './../../../assets/Images/logo/logo-1.png'

function HeaderLogo(props) {
    const urlInfo = useSelector(state => state.urlReducer)

    
    const renderHeaderLogo = () =>{

        const {url} = urlInfo
        if(
            url.indexOf('mall') !== -1 || 
            url.indexOf('product-detail') !== -1 ||
            url.indexOf('comming-soon') !== -1
        ){
            return "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851625/BaristaCoffee/logo/logo-2_x72h08.png"
        }

        return logo
    }

    return (
        <div className="header__logo">
            <NavLink to="/">
            <img src={renderHeaderLogo()} alt="logo" />
            
            </NavLink>
        </div>
    );
}

export default HeaderLogo;