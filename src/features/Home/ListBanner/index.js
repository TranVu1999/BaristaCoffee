import React from 'react'
import './style.scss'

import BannerItem from './../../../commons/components/BannerItem'

function ListBanner(props) {
    const renderHTML = () =>{
        const {listBanner} = props;

        return listBanner.map((item, index) => <BannerItem 
            key = {index} 
            img = {item.img}
            title = {item.title}
        />)
    }

    return (
        <div>
            <section className="section-padding banner">
                <div className="cf-container d-flex-between banner__content">
                    {renderHTML()}
                </div>
            </section>
        </div>
    )
}

export default ListBanner
