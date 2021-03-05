import React, { Component } from 'react';
import AccordingToggle from '../AccordingToggle';
import Popup from '../Popup';
import './style.scss';

import {connect} from 'react-redux';

class FormReview extends Component {
    constructor(props){
        super(props);
        this.state = {
            rating: 0,
            indexHover: 0,
            comment: '',
            isOpenPopup: false,
            error: ''
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

    onHandleChange=(event)=>{
        const {name, value} = event.target;
        this.setState({
            ...this.state,
            [name]: value
        }, () => console.log("comment", this.state.comment))
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        const accountInfo = localStorage.getItem('accountInfo');
        if(accountInfo){
            // Đã đăng nhập
            if(this.state.comment === ''){
                // Chưa nhập nội dung
                this.setState({
                    ...this.state,
                    error: 'Your comment cannot be left blank.'
                })
            }else{
                // Được phép comment

            }
        }else{
            // Chưa đăng nhập
            this.setState({
                ...this.state,
                error: 'You must be logged in to perform this feature.'
            })
            
        }
    }

    onHandleOpenLoginForm=(isOpen)=>{
        this.setState({
            ...this.state,
            error: ''
        })
    }

    render() {
        const{comment, error} = this.state;

        return (
            <>
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

                        <form 
                            className = "form-comment"
                            onSubmit = {this.handleSubmit}
                        >
                            <div className = "form-group">
                                <textarea 
                                    name="comment"
                                    cols= "45" 
                                    rows = "8" 
                                    defaultValue={comment} 

                                    placeholder = "Your Review"
                                    onChange={this.onHandleChange}

                                ></textarea>
                            </div>
                            <div className="form-group">
                                <button className="coffee-btn">Submit</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
                <Popup 
                    popupTitle="Notify" isOpen = {error !== ''}
                    onHandleOpenLoginForm = {this.onHandleOpenLoginForm}
                >
                    <AccordingToggle>
                        <div className="accordition-toggle--box">
                            <div className = "accordition-span">{error}</div>
                        </div>
                    </AccordingToggle>
                </Popup>
            </>
        )
    }
}

export default connect()(FormReview)