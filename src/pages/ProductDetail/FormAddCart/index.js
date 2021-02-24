import React, { Component } from 'react';
import './style.scss';

export default class FormAddCart extends Component {
    constructor(props){
        super(props);
        this.state = {
            number: 1
        }
    }

    handleUpdateNumber = (val) =>{
        let number = this.state.number + val;
        if(number > 0 && number < 50){
            this.setState({
                number: this.state.number + val
            })
        }
    }

    onHandleSubmit = (event) =>{
        event.preventDefault();
    }

    render() {
        const {number} = this.state;

        return (
            <form 
                className="d-flex-between product-add-cart"
                onSubmit = {this.onHandleSubmit}
            >
                <div className="form-group--amount">
                    <button 
                        className="btn-increase"
                        onClick = {() => this.handleUpdateNumber(-1)}
                    ><span aria-hidden="true" className="icon_minus-06" /></button>
                    <input type="text" value = {number}/>
                    <button 
                        className="btn-decrease"
                        onClick = {() => this.handleUpdateNumber(1)}
                    ><span aria-hidden="true" className="icon_plus" /></button>
                </div>
                <div className="form-group">
                    <button className="coffee-btn">Add To Cart</button>
                </div>
            </form>
        )
    }
}
