import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import PropTypes from 'prop-types';
import './style.scss'

import * as notifies from './../../../commons/constant/Notify'
import {actOpenNotify} from './../../../commons/modules/Notify/action'
import api from './../../../api'

FormComment.propTypes = {
    product: PropTypes.string,

    onGetNewComment: PropTypes.func,
};

FormComment.defaultProps = {
    product: "",

    onGetNewComment: null
}

function FormComment(props) {

    const productPurchased = useSelector(state => state.accountReducer.productPurchased)
    const fullname = useSelector(state => state.accountReducer.fullname)

    const [content, setContent] = useState("")
    const [rate, setRate] = useState(0)
    const [indexHoverStar, setIndexHoverStart] = useState(0)

    const dispatch = useDispatch()

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

    const onHandleChange = event =>{
        const {value} = event.target
        setContent(value)
    }

    const handleSubmit = event =>{
        event.preventDefault()

        // check login
        const accessToken = localStorage.getItem('accessToken')
        if(!accessToken){
            dispatch(actOpenNotify({
                isSuccess: false,
                content: notifies.REQUIRED_LOGIN
            }))
            
            return
        }

        // check accept rating
        const product = productPurchased.find(item => item._id === props.id)
        if(rate !== 0 && !product){
            dispatch(actOpenNotify({
                isSuccess: false,
                content: notifies.REQUIRED_PURCHASED
            }))
            return
        }

        // commit comment
        const data = {
            rating: rate,
            comment: content,
            productId: props.product,
            author: fullname

        }

        console.log({data})

        api.post('product/comment', data)
        .then(res =>{
            if(res.data.success){
                if(props.onGetNewComment){
                    props.onGetNewComment(res.data.newRate)
                }
                dispatch(actOpenNotify({
                    isSuccess: true,
                    content: notifies.SUCCESS_NOTIFY
                }))
                setContent("")
            }
        })
        .catch(err =>{
            console.log(err)
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
                    onSubmit = {handleSubmit}
                >
                    <div className = "form-group">
                        <textarea 
                            name="comment"
                            cols= "45" 
                            rows = "8" 
                            value={content} 

                            placeholder = "Your Review"
                            onChange={onHandleChange}

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