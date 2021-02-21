import React, { Component } from 'react';
import './style.scss';

class Navigation extends Component {
    renderNavItem = () =>{
        const {amount, per, pageActive} = this.props;
        if(amount){

            let amountPage = parseInt(amount/per);
            amountPage = amount === (amountPage * per) ? amountPage : (amountPage + 1);
            
            let arr = [];
            for(let i = 0; i < amountPage; i++){
                arr.push(i);
            }

            return arr.map((item, index) =>{
                if(index === pageActive){
                    return (
                        <li 
                            className="nav--number active" 
                            key = {index}
                        ><a href="/#">{index + 1}</a></li>
                    )
                }
                return (
                    <li 
                        className="nav--number" 
                        key = {index}
                    ><a href="/#">{index + 1}</a></li>
                )
            })
        }
        

    }
    render() {
        return (
            <section className="nav">
                <div className="d-flex-between cf-container nav__content">
                    <button className="nav--left"><i className="fas fa-arrow-left" /></button>
                    <ul>
                        {this.renderNavItem()}
                    </ul>
                    <button className="nav--right"><i className="fas fa-arrow-right" /></button>
                </div>
            </section>

        );
    }
}

export default Navigation;