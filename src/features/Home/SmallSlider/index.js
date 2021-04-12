import React, {useState} from 'react'
import './style.scss'

function SmallSlider() {
    const [currentSlide, setCurrentSlide] = useState(1)
    const [distance] = useState(355)

    const handleChooseSlide = (indexSlide) =>{
        setCurrentSlide(indexSlide)
    }

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
                            <div 
                                className="item"
                                style = {{
                                    marginTop: -currentSlide * distance + "px"
                                }}
                            >
                                <div className="item__content" style={{backgroundImage: 'url(https://barista.qodeinteractive.com/wp-content/uploads/2017/01/main-home-project-pres-2.jpg'}} />
                            </div>
                            <div className="item">
                                <div className="item__content" style={{backgroundImage: 'url(https://res.cloudinary.com/doem0ysxl/image/upload/v1611851628/BaristaCoffee/other/small-slider1_girfoi.jpg'}} />
                            </div>
                            <div className="item">
                                <div className="item__content" style={{backgroundImage: 'url(https://barista.qodeinteractive.com/wp-content/uploads/2017/01/main-home-project-pres-3.jpg'}} />
                            </div>
                        </div>
                        <div className="small-carousel__dots">
                            <button 
                                className = {currentSlide === 0 ? "dot active" : "dot"} 
                                onClick = {() =>{handleChooseSlide(0)}}
                            />
                            <button 
                                className = {currentSlide === 1 ? "dot active" : "dot"} 
                                onClick = {() =>{handleChooseSlide(1)}}
                            />
                            <button 
                                className = {currentSlide === 2 ? "dot active" : "dot"} 
                                onClick = {() =>{handleChooseSlide(2)}}

                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SmallSlider
