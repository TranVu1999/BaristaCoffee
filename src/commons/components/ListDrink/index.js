import React from 'react'
import './style.scss'

import DrinkItem from './DrinkItem'

function ListDrink(props) {
    const renderListDrink = () =>{
        return props.listDrink.map((item, index) =>{
            return <DrinkItem 
                key = {index} 
                img = {item.img}
                title = {item.title}
                price = {item.price}
                shortDesc = {item.shortDesc}
                isNew = {item.isNew}
            />
        })
    }

    const listLeft = props.listDrink.slice(0, (props.listDrink.length / 2));
    const listRight = props.listDrink.slice(props.listDrink.length / 2, props.listDrink.length);

    return (
        <div className="cf-container our-menu__content">
                <div className="mb-25 d-flex-between">
                    <div className="our-menu--left">
                        <div className="our-menu--list">
                            {renderListDrink(listLeft)}
                        </div>
                    </div>
                    <div className="our-menu--right">
                        <div className="our-menu--list">
                            {renderListDrink(listRight)}
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <a href="/#" className="barista-btn">View Menu</a>
                </div>
            </div>
    )
}

export default ListDrink
