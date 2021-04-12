import React from 'react'

function BannerItem(props) {
    return (
        <a href="/#" className="banner__item" style={{backgroundImage: `url(${props.img})`}}>
            <div className="banner--overlay"></div>
            <div className="d-flex-between banner--text">
                <h6>{props.title}</h6>
                <button>Read more <span className="icon icon-arrow-right2" /></button>
            </div>
        </a>
    )
}

export default BannerItem
