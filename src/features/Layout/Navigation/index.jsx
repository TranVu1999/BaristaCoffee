import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

Navigation.propTypes = {
    activePage: PropTypes.number,
    perPage: PropTypes.number,
    sizeList: PropTypes.number,
    onChosePage: PropTypes.func,
};

Navigation.defaultProps = {
    activePage: 1,
    perPage: 9,
    sizeList: 0,
    onChosePage: null
}

function Navigation(props) {

    const handleChoosePage = indexPage =>{
        if(props.onChosePage){
            props.onChosePage(indexPage)
        }
    }

    const renderNavItem = () =>{
        const {
            sizeList, 
            perPage,
            activePage
        } = props

        const amountPage = Math.ceil(sizeList/perPage)
        
        let arr = [];
        for(let i = 0; i < amountPage; i++){
            arr.push(i);
        }

        return arr.map((item, index) =>{
            if((index + 1) === activePage){
                return (
                    <li 
                        className="nav--number active" 
                        key = {index}
                        onClick = {() => handleChoosePage(index + 1)}
                    >{index + 1}</li>
                )
            }
            return (
                <li 
                    className="nav--number" 
                    key = {index}
                    onClick = {() => handleChoosePage(index + 1)}
                >{index + 1}</li>
            )
        })
    }

    return (
        <section className="nav">
            <div className="d-flex-between nav__content">
                <button className="nav--left"><i className="fas fa-arrow-left" /></button>
                <ul>
                    {renderNavItem()}
                </ul>
                <button className="nav--right"><i className="fas fa-arrow-right" /></button>
            </div>
        </section>
    );
}

export default Navigation;