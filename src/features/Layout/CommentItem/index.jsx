import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './style.scss'

CommentItem.propTypes = {
    author: PropTypes.string,
    time: PropTypes.string,
    rating: PropTypes.number,
    content: PropTypes.string,
    listSubComment: PropTypes.array,
};

CommentItem.defaultProps = {
    author: "",
    time: "",
    rating: 0,
    content: "",
    listSubComment: []
}

function CommentItem(props) {

    const {
        author,
        time,
        rating,
        content,
        listSubComment
    } = props

    const [isReplay, setIsReplay] = useState(false)
    const [replayContent, setReplayContent] = useState("")

    const onHanldeOpenReplay = to =>{
        setIsReplay(true)
        setReplayContent(`@${to} `)
    }

    const onHandleChange = event =>{
        const {value} = event.target
        setReplayContent(value)
    }

    const renderListSubComment = () =>{
        if(listSubComment.length > 0){
            return listSubComment.map((item, index) =>{
                return (
                    <li 
                        key = {index}
                        className="sub-cmt-item"
                    >
                        <div className="d-flex-start align-start cmt-item__content">
                            <img src="https://secure.gravatar.com/avatar/a3c4d88c6648438f6ab44c0f13260353?s=83&d=mm&r=g" alt="user avatar" className="cmt-item--avatar" />
                            <div className="cmt-item--text">
                                <div className="d-flex-between align-start cmt-item--text__top">
                                <div className="author">
                                    <h4 >{author}</h4>
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
                                        <span className="time">{time}</span>
                                        <button onClick = {() => onHanldeOpenReplay("Tran Le Anh Vu")}>Replay</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                )
            })
        }
    }

    return (
        <li className="cmt-item">
            <div className="d-flex-start align-start cmt-item__content">
            <img src="https://secure.gravatar.com/avatar/a3c4d88c6648438f6ab44c0f13260353?s=83&d=mm&r=g" alt="user avatar" className="cmt-item--avatar" />
            <div className="cmt-item--text">
                <div className="d-flex-between align-start cmt-item--text__top">
                <div className="author">
                    <h4>{author}</h4>
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
                        <span className="time">{time}</span>
                        <button onClick = {() => onHanldeOpenReplay(author)}>Replay</button>
                    </div>
                </div>
            </div>
            </div>


            <ul className = "lst-sub-cmt"> {renderListSubComment()}</ul>

            {isReplay ? (
                <form className = "form-replay">
                    <div className = "form-group">
                        <img src="https://secure.gravatar.com/avatar/a3c4d88c6648438f6ab44c0f13260353?s=83&d=mm&r=g" alt="user avatar" className="cmt-item--avatar" />
                        <textarea 
                            name="comment"
                            rows = "2"
                            value={replayContent} 

                            placeholder = "Your Review"
                            onChange={onHandleChange}

                        ></textarea>
                        <button className="coffee-btn"><span class="icon icon-compass"></span></button>
                    </div>
                </form>
            ) : ""}
            
        </li>
    );
}

export default CommentItem;