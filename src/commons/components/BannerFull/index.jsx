import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

BannerFull.propTypes = {
    title: PropTypes.string,
    img: PropTypes.string
};

BannerFull.defaultProps = {
    title: "Banner",
    img: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851621/BaristaCoffee/banners/banner6_haqpao.jpg"
}

function BannerFull(props) {
    const {title, img} = props

    return (
        <div 
            className="page dark banner" 
            style={{backgroundImage: `url(${img})`}}
            >
            <div className="py-0 banner__content">
                <div className="d-flex-center banner--text">
                    <h1>{title}</h1>
                </div>
            </div>
        </div>
    );
}

export default BannerFull;