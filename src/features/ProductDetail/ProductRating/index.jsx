import React from 'react';
import {useSelector} from 'react-redux'
import PropTypes from 'prop-types';
import './style.scss'

ProductRating.propTypes = {
    listComment: PropTypes.array,
};

ProductRating.defaultProps = {
    listComment: []
}

function ProductRating(props) {
    const {listComment} = props

    const getAmountNumberStart = number =>{
        let count = 0;

        for(let item of listComment){
            if(item.rating === number){
                count++
            }
        }

        return count
    }

    const convertToFloat = (number) =>{
        number += ""

        if(number.length <= 1){
            number += ".0"
        }

        return number
    }

    const amount_5 = getAmountNumberStart(5)
    const amount_4 = getAmountNumberStart(4)
    const amount_3 = getAmountNumberStart(3)
    const amount_2 = getAmountNumberStart(2)
    const amount_1 = getAmountNumberStart(1)

    const amountTotal =amount_1 + amount_2 + amount_3 + amount_4 + amount_5
    const amountAverage = (amount_5 * 5 + amount_4 * 4 + amount_3 * 3 + amount_2 * 2 + amount_1) * 1 / amountTotal

    return (
        <div className="rating-container">
            <div className="rating-content">
                <div className="rating--left">
                    <span className="number">{convertToFloat(amountAverage)}</span>
                    <div className="star-thumb">
                        <span class="icon icon-star-full"></span>
                        {amountTotal} đánh giá
                    </div>

                </div>
                <div className="rating--right">
                    {/* 5 */}
                    <div className="rating--row">
                        <div className="list-star">
                            <div className="overlay"></div>
                            <span class="icon icon-star-full active"></span>
                            <span class="icon icon-star-full active"></span>
                            <span class="icon icon-star-full active"></span>
                            <span class="icon icon-star-full active"></span>
                            <span class="icon icon-star-full active"></span>
                        </div>
                        <div className="rating--bar">
                            <div className="bar" style={{width: 100 + '%'}}></div>
                        </div>
                        <span className="rating--number">{amount_5}</span>
                    </div>

                    {/* 4 */}
                    <div className="rating--row">
                        <div className="list-star">
                            <div className="overlay"></div>
                            <span class="icon icon-star-full active"></span>
                            <span class="icon icon-star-full active"></span>
                            <span class="icon icon-star-full active"></span>
                            <span class="icon icon-star-full active"></span>
                            <span class="icon icon-star-full"></span>
                        </div>
                        <div className="rating--bar">
                            <div className="bar" style={{width: 80 + '%'}}></div>
                        </div>
                        <span className="rating--number">{amount_4}</span>
                    </div>

                    {/* 3 */}
                    <div className="rating--row">
                        <div className="list-star">
                            <div className="overlay"></div>
                            <span class="icon icon-star-full active"></span>
                            <span class="icon icon-star-full active"></span>
                            <span class="icon icon-star-full active"></span>
                            <span class="icon icon-star-full"></span>
                            <span class="icon icon-star-full"></span>
                        </div>
                        <div className="rating--bar">
                            <div className="bar" style={{width: 60 + '%'}}></div>
                        </div>
                        <span className="rating--number">{amount_3}</span>
                    </div>

                    {/* 2 */}
                    <div className="rating--row">
                        <div className="list-star">
                            <div className="overlay"></div>
                            <span class="icon icon-star-full active"></span>
                            <span class="icon icon-star-full active"></span>
                            <span class="icon icon-star-full "></span>
                            <span class="icon icon-star-full "></span>
                            <span class="icon icon-star-full "></span>
                        </div>
                        <div className="rating--bar">
                            <div className="bar" style={{width: 40 + '%'}}></div>
                        </div>
                        <span className="rating--number">{amount_2}</span>
                    </div>

                    {/* 1 */}
                    <div className="rating--row">
                        <div className="list-star">
                            <div className="overlay"></div>
                            <span class="icon icon-star-full active"></span>
                            <span class="icon icon-star-full"></span>
                            <span class="icon icon-star-full"></span>
                            <span class="icon icon-star-full"></span>
                            <span class="icon icon-star-full"></span>
                        </div>
                        <div className="rating--bar">
                            <div className="bar" style={{width: 20 + '%'}}></div>
                        </div>
                        <span className="rating--number">{amount_1}</span>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default ProductRating;