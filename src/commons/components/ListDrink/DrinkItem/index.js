import React from 'react'
import './style.scss'

function DrinkItem(props) {

    const {
        img,
        title,
        price,
        shortDesc,
        isNew
    } = props

    return (
        <div className="menu-item">
            <div className="menu-item--thumb">
                <a href="/#">
                    <img src = {img} alt="coffee" />
                </a>
            </div>

            <div className="menu-item--text">
                <div className="menu-item--text__top">
                    <h3>
                        <a href="/#">{title}</a>
                    </h3>
                    <div className="space" />
                    <h3 className="price">${price}</h3>
                </div>
                <div className="menu-item--text__bottom">
                    <p>{shortDesc}</p>
                    {isNew ? <span className="label">New</span> : ""}
                    
                </div>
            </div>
        </div>
    )
}

export default DrinkItem