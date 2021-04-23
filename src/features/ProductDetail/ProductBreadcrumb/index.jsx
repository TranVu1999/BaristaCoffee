import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

ProductBreadcrumb.propTypes = {
    productCategory: PropTypes.string,
    keySearch: PropTypes.string,
    onResetKeySearch: PropTypes.func,
    onResetProductCategory: PropTypes.func,
};

ProductBreadcrumb.defaultProps = {
    productCategory: "",
    keySearch: "",
    onResetKeySearch: null,
    onResetProductCategory: null
}

function ProductBreadcrumb(props) {
    const {productCategory, keySearch} = props

    const onHanldeResetKeySearch = () =>{
        if(props.onResetKeySearch){
            props.onResetKeySearch()
        }
    }

    const onHanldeResetProducteCategory = () =>{
        if(props.onResetProductCategory){
            props.onResetProductCategory()
        }
    }

    return (
        <div className = "breadcrumb__container">
            <ul>
                <li
                    onClick = {onHanldeResetProducteCategory}
                >Barista Coffeee</li>
                
                {
                    productCategory ? (
                        <li 
                            onClick = {onHanldeResetKeySearch}
                        > <label>Product Category:</label> {productCategory} </li>
                    ) : ""
                }

                {
                    keySearch ? (
                        <li> <label>Key Search:</label> {keySearch} </li>
                    ) : ""
                }
            </ul>
        </div>
    );
}

export default ProductBreadcrumb;