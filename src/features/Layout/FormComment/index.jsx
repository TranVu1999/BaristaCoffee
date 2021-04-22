import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './style.scss'

FormComment.propTypes = {
    
};

function FormComment(props) {
    const [content, setContent] = useState("")
    const [rate, setRate] = useState(0)
    const [indexHoverStar, setIndexHoverStart] = useState(0)

    const onHandleRating = indexStart =>{
        setRate(indexStart + 1)
        setIndexHoverStart(0)
    }

    const onHandleHoverStar = indexStart =>{
        setIndexHoverStart(indexStart + 1)
    }

    const onHandleNotHover = () =>{
        setIndexHoverStart(0)
    }

    const renderStar = () =>{

        let arr = [];
        for(let i = 0; i < 5; i++) arr.push(i);

        return arr.map((item, index) =>{
            return (
                <span 
                    key = {index} 
                    className= {index < rate ? "icon icon-star-full active" : "icon icon-star-full"}
                    style = {index < indexHoverStar ? {color: "#FFC000"} : {}}
                    onClick = {() => onHandleRating(index)}
                    onMouseEnter = {() => onHandleHoverStar(index)}

                />
            )
        })
    }

    return (
        <div className = "review-box">
            <div className = "review__content">
                <h2>Add a review</h2>
                <span>Your email address will not be published. Required fields are marked *</span>

                <div className = "rating-box">
                    <span className = "rating-span">Your Rating</span>
                    <div 
                        className = "rating"
                        onMouseLeave = {onHandleNotHover}
                    >
                        {renderStar()}
                    </div>
                </div>

                <form 
                    className = "form-comment"
                    // onSubmit = {this.handleSubmit}
                >
                    <div className = "form-group">
                        <textarea 
                            name="comment"
                            cols= "45" 
                            rows = "8" 
                            defaultValue={content} 

                            placeholder = "Your Review"
                            // onChange={this.onHandleChange}

                        ></textarea>
                    </div>
                    <div className="form-group">
                        <button className="coffee-btn">Submit</button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
}

export default FormComment;