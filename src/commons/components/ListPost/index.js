import React from 'react'
import './style.scss'

import PostItem from './PostItem'

function ListPost(props) {
    const renderListPost = () =>{
        const {listPost} = props;

        return listPost.map((item, index) =>{
            return <PostItem 
                key = {index} 
                number = {item.number}
                img = {item.img}
                title = {item.title}
                shortDesc = {item.shortDesc}
            />
        })
    }

    return (
        <div className="d-gr-3 services-post">
                {renderListPost()}
        </div>
    )
}

export default ListPost
