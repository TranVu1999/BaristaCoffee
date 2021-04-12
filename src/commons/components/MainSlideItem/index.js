import React from 'react'
import './style.scss'

import Button from './../Button'

function MainSlideItem(props) {
    const renderTitleBox = () =>{
        const {posLeft, letters, word} = props;

        return posLeft ? (
            <div className="title-box__animate">
                <div className="blur-animate">
                    {letters.map((item, index) =>{
                        return <div className="letter" key = {index}>{item}</div>
                    })}
                </div>
                <div className="move-animate move">{word}</div>
            </div>
        ) : (
            <div className="title-box__animate">
                <div className="blur-animate">
                    {word}
                </div>
                <div className="move-animate">
                    {letters.map((item, index) =>{
                        return <div className="letter" key = {index}>{item}</div>
                    })}
                </div>
            </div>
        );
    }

    return (
        <div className="item__content bg-white" style={{backgroundImage: `url(${props.img})`}}>
            <div className="slide-title-box">
            <h1>{props.mainTitle}</h1>

            {renderTitleBox()}

            <div className="desc-box__animate">
                {props.shortDesc}
            </div>
            <div className="read-more-box__animate">
                <Button/>
            </div>
            </div>
        </div>
    )
}

export default MainSlideItem
