import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

CommentItem.propTypes = {
    author: PropTypes.string,
    time: PropTypes.string,
    rating: PropTypes.number,
    content: PropTypes.string,
};

CommentItem.defaultProps = {
    author: "",
    time: "",
    rating: 0,
    content: ""
}

function CommentItem(props) {

    const {
        author,
        time,
        rating,
        content
    } = props

    return (
        <li className="cmt-item">
            <div className="d-flex-start align-start cmt-item__content">
            <img src="https://secure.gravatar.com/avatar/a3c4d88c6648438f6ab44c0f13260353?s=83&d=mm&r=g" alt="user avatar" className="cmt-item--avatar" />
            <div className="cmt-item--text">
                <div className="d-flex-between align-start cmt-item--text__top">
                <div>
                    <h4 className="author">{author}</h4>
                    <span className="time">{time}</span>
                </div>

                {rating > 0 ? (
                    <div className="product-rate">
                        <div 
                            className="product-rate--overlay" 
                            style={{width: 100 - rating + '%'}} 
                        />
                        <span className="icon icon-star-full" />
                        <span className="icon icon-star-full" />
                        <span className="icon icon-star-full" />
                        <span className="icon icon-star-full" />
                        <span className="icon icon-star-full" />
                    </div>
                ) : ""}
                
                </div>
                <div className="cmt-item--text__bottom">
                    <p>{content}</p>

                    <div className="cmt-replay">
                        <button>Replay</button>
                    </div>
                </div>
            </div>
            </div>
        </li>
    );
}

export default CommentItem;