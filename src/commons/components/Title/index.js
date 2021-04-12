import React from 'react'
import './style.scss'

function Title(props) {
    return (
        <div className="title-box">
            <p>{props.smallTitle}</p>
            <h2>{props.mainTitle}</h2>
        </div>
    )
}

export default Title
