import React from 'react';
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'

import './style.scss'

Breadcrumb.propTypes = {
    title: PropTypes.string,
};

Breadcrumb.defaultProps = {
    title: "Breadcrum title"
}

function Breadcrumb(props) {
    const {title} = props
    return (
        <div className="main-page__breadcrumb">
                <div className="cf-container d-flex-between full-screen">
                    <h3>{title}</h3>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="./index.html">Barista</a></li>
                        <li className="breadcrumb-item"><a href="./my-account.html">Error 404</a></li>                        
                    </ul>
                </div>

                <div className="d-flex-between responsive">

                    <NavLink to = "/my-account">
                        <span aria-hidden="true" className="arrow_carrot-left"></span>
                    </NavLink>
                    <h3 id="titlePage">{title}</h3>
                    <a href="/#" className="cart">
                        <span aria-hidden="true" className="icon_cart_alt" />
                        <span className="number">1</span>
                    </a>
                </div>
            </div>
    );
}

export default Breadcrumb;