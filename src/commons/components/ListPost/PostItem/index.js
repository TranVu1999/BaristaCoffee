import React from 'react'
import './style.scss'

function PostItem(props) {

    const {
        number,
        img,
        title,
        author,
        category,
        date,
        shortDesc
    } = props

    return (
        <article className="post intro-post">
            <div 
                className="post--image"
                style = {{
                    marginBottom: number ? "0px" : "25px "
                }}
            >
                <a href="/#">
                    <img src = {img} alt="post" />
                </a>
            </div>
            <div className="post--text">
                <h3 className="post--text__title">
                    {number ? (
                        <span className="number">{number}</span>
                    ) : ""}
                    
                    <a href="/#">{title}</a>
                </h3>

                {author ? (
                    <div className="post--text__info">
                        <div className="post--text__info--author">
                            <a href="/#">by {author}</a>
                        </div>
                        <div className="post--text__info--categories">
                            <a href="/#">{category}</a>
                        </div>
                        <div className="post--text__info--update">
                            <span>{date}</span>
                        </div>
                    </div>
                ) : ""}
                

                <p className="post--text__short-desc">{shortDesc}</p>
                <a href="/#" className="barista-read-more">Read more <span className="icon icon-arrow-right2" /></a>
            </div>
        </article>
    )
}

export default PostItem
