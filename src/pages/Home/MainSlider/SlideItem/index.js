import React, { Component } from 'react';
import Button from './../../../../commons/components/Button';

export default class SlideItem extends Component {


    render() {
        const {itemContent} = this.props;
        console.log(itemContent);

        return (
            
            <div className="item__content bg-white" style={{backgroundImage: `url(${itemContent.img})`}}>
                <div className="slide-title-box">
                <h1>{itemContent.mainTitle}</h1>
                <div className="title-box__animate">
                    <div className="blur-animate">
                    <div className="letter">A</div>
                    <div className="letter">R</div>
                    <div className="letter">O</div>
                    <div className="letter">M</div>
                    <div className="letter">A</div>
                    </div>
                    <div className="move-animate">
                    COFFEE
                    </div>
                </div>
                <div className="desc-box__animate">
                    Lorem ipsum dolor sit amet, nec ne oficiis electram. dolore nominati vim et.
                </div>
                <div className="read-more-box__animate">
                    <Button/>
                </div>
                </div>
            </div>
        )
    }
}
