import React, {useState} from 'react'
import './style.scss'

import MainSlideItem from '../../../commons/components/MainSlideItem'

function MainSlider() {
    const [listSlide] = useState(
        [
            {
                mainTitle: "distinct",
                letters: ['A', 'R', 'O', 'M', 'A'],
                posLeft: true,
                word: "COFFEE",
                img: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851621/BaristaCoffee/banners/slider2_koyux7.jpg",
                shortDesc: "Lorem ipsum dolor sit amet, nec ne oficiis electram. dolore nominati vim et."
            },
            {
                mainTitle: "Made",
                letters: ['F', 'E', 'E', 'L', 'L', 'I', 'N', 'G'],
                posLeft: false,
                word: "with",
                img: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851621/BaristaCoffee/banners/slider1_tewu6o.jpg",
                shortDesc: "Lorem ipsum dolor sit amet, nec ne oficiis electram. dolore nominati vim et."
            },
            {
                mainTitle: "UNIQUELY",
                letters: ['T', 'A', 'S', 'T', 'E'],
                posLeft: false,
                word: "fresh",
                img: "https://res.cloudinary.com/doem0ysxl/image/upload/v1611851622/BaristaCoffee/banners/slider3_uq8xmo.jpg",
                shortDesc: "Lorem ipsum dolor sit amet, nec ne oficiis electram. dolore nominati vim et."
            }
        ]
    )
    const [currentSlide, setCurrentSlide] = useState(0)
    const [pos, setPos] = useState(0)

    const onhandleNav = (direct) =>{
        let newCurrentSlide = currentSlide + direct

        if(currentSlide >= 0 && currentSlide < 3){
            setCurrentSlide(newCurrentSlide)
            setPos(newCurrentSlide * 100)
        }
    }

    const onHandleChooseDot = (index) =>{
        let newCurrentSlide = index

        setCurrentSlide(newCurrentSlide)
        setPos(newCurrentSlide * 100)
    }

    const renderHTML = () =>{

        let html = listSlide.map((item, index) =>{
            if(index === 0){
                return (
                    <div 
                        key = {index}
                        className={currentSlide === index ? "item active" : "item leave"}
                        style = {{
                            marginLeft: -pos + "%"
                        }}
                    ><MainSlideItem 
                        mainTitle = {item.mainTitle}
                        letters = {item.letters}
                        posLeft = {item.posLeft}
                        word = {item.word}
                        img = {item.img}
                        shortDesc = {item.shortDesc}
                    /></div>
                )
            } 

            return (
                <div 
                    key = {index}
                    className={currentSlide === index ? "item active" : "item leave"}
                    
                ><MainSlideItem 
                    mainTitle = {item.mainTitle}
                    letters = {item.letters}
                    posLeft = {item.posLeft}
                    word = {item.word}
                    img = {item.img}
                    shortDesc = {item.short}
                /></div>
            )
        })

        return html;
    }
    



    return (
        <section className="main-slider">
            <div className="main-slider__content">
                <div className="carousel main-carousel" id="main_carousel">
                    <div className="coursel__content">
                        {renderHTML()}
                    </div>
                    
                    <div className="main-carousel__nav">
                        <button 
                            className="nav-left"
                            onClick = { () =>{onhandleNav(-1)} }
                        ><span className="icon icon-arrow-left2"> </span></button>
                        <button 
                            className="nav-right"
                            onClick = { () =>{onhandleNav(1)} }
                        ><span className="icon icon-arrow-right2" ></span></button>
                    </div>
                    <div className="main-carousel__dots">
                        <button 
                            className = {currentSlide === 0 ? "dot active" : "dot"}
                            onClick = {() => onHandleChooseDot(0)}
                        />

                        <button 
                            className = {currentSlide === 1 ? "dot active" : "dot"}
                            onClick = {() => onHandleChooseDot(1)}
                        />

                        <button 
                            className = {currentSlide === 2 ? "dot active" : "dot"}
                            onClick = {() => onHandleChooseDot(2)}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainSlider
