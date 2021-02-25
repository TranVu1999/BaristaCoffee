import React, { Component } from 'react';
import './style.scss';

export default class FormReview extends Component {
    constructor(props){
        super(props);
        this.state = {
            rating: 0,
            indexHover: 0
        }
    }

    onHandleRating = (index) =>{
        this.setState({
            indexHover: 0,
            rating: index + 1
        })
    }

    onHandleHoverStar = (index) =>{
        this.setState({
            ...this.state,
            indexHover: index + 1
        })
    }

    onHandleNotHover = () =>{
        this.setState({
            ...this.state,
            indexHover: 0
        }) 
    }

    renderStar = () =>{
        const {rating, indexHover} = this.state;
        let arr = [];
        for(let i = 0; i < 5; i++) arr.push(i);

        return arr.map((item, index) =>{
            return (
                <span 
                    key = {index} 
                    className= {index < rating ? "icon icon-star-full active" : "icon icon-star-full"}
                    style = {index < indexHover ? {color: "#FFC000"} : {}}
                    onClick = {() => this.onHandleRating(index)}
                    onMouseEnter = {() => this.onHandleHoverStar(index)}

                />
            )
        })
    }

    render() {
        return (
            <div className = "review-box">
                <div className = "review__content">
                    <h2>Add a review</h2>
                    <span>Your email address will not be published. Required fields are marked *</span>

                    <div className = "rating-box">
                        <span className = "rating-span">Your Rating</span>
                        <div 
                            className = "rating"
                            onMouseLeave = {this.onHandleNotHover}
                        >
                            {this.renderStar()}
                        </div>
                    </div>

                    <form className = "form-comment">
                        <div className = "form-group">
                            <textarea cols= "45" rows = "8" placeholder="Your Review"></textarea>
                        </div>
                        <div class="form-group">
                            <button class="coffee-btn">Submit</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        )
    }
}
