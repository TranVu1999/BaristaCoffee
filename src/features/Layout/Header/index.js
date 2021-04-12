import React from 'react'
import './style.scss'

function Header(props) {
    return (
        <header className = "header">
            {props.children}
        </header>
    )
}

export default Header
