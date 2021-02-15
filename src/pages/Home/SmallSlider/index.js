import React, { Component } from 'react';
import './style.scss';

export default class SmallSlider extends Component {
    render() {
        return (
            <div className="section-padding small-slider">
                <div className="cf-container d-flex-start small-slider__content">
                    <div className="small-slider--left">
                        <div className="small-slider--text">
                            <h2>Try the best coffee in the city</h2>
                            <p>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an at dictum lacu pericula uni euripidis.</p>
                            <a href="/#" className="barista-read-more">Read more <span className="icon icon-arrow-right2" /></a>
                        </div>
                    </div>

                    <div className="small-slider--right">
                        <div className="carousel small-carousel">
                            <div className="carousel__content small-carousel__content">
                            <div className="item">
                                <div className="item__content" style={{backgroundImage: 'url(https://res.cloudinary.com/doem0ysxl/image/upload/v1611851628/BaristaCoffee/other/small-slider1_girfoi.jpg'}} />
                            </div>
                            </div>
                            <div className="small-carousel__dots">
                                <button className="dot active" />
                                <button className="dot" />
                                <button className="dot" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
