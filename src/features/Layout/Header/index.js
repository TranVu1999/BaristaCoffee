import React from 'react'
import {useSelector} from 'react-redux'
import './style.scss'

function Header(props) {
    const urlInfo = useSelector(state => state.urlReducer)

    
    const renderHeaderClass = () =>{
        let resClass = "header"
        
        const {url} = urlInfo
        if(
            url.indexOf('mall') !== -1 || 
            url.indexOf('product-detail') !== -1
        ){
            resClass += " dark"
        }

        return resClass
    }

    return (
        <header className = {renderHeaderClass()}>
            {props.children}
        </header>
    )
}

export default Header
