import React, { Component } from 'react'
import DrinkItem from './DrinkItem'

export default class ListDrink extends Component {

    renderListDrink = (listDrink) =>{
        return listDrink.map((item, index) =>{
            return <DrinkItem key = {index} drinkContent = {item}/>
        })
    }

    render() {
        const {listDrink} = this.props;
        console.log("list", listDrink);

        const listLeft = listDrink.slice(0, (listDrink.length / 2));
        const listRight = listDrink.slice(listDrink.length / 2, listDrink.length);

        console.log("list left", listLeft);
        console.log("list right", listRight);

        return (
            <div className="cf-container our-menu__content">
                <div className="mb-25 d-flex-between">
                    <div className="our-menu--left">
                        <div className="our-menu--list">
                            {this.renderListDrink(listLeft)}
                        </div>
                    </div>
                    <div className="our-menu--right">
                        <div className="our-menu--list">
                            {this.renderListDrink(listRight)}
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <a href="/#" className="barista-btn">View Menu</a>
                </div>
            </div>
        )
    }
}
