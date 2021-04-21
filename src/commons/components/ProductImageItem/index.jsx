import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

ProductImageItem.propTypes = {
    img: PropTypes.string,
    onGetIndexChose: PropTypes.func,
    indexImage: PropTypes.number,
    isActive: PropTypes.bool,
};

ProductImageItem.defaultProps = {
    img: "",
    onGetIndexChose: null,
    indexImage: 0,
    isActive: false
}

function ProductImageItem(props) {

    const onHanldeChoseImage = () =>{
        if(props.onGetIndexChose){
            props.onGetIndexChose(props.indexImage)
        }
    }

    return (
        <div 
            className = {props.isActive ? "product-item--image active" : "product-item--image"}
            onClick = {onHanldeChoseImage}
        >
            <div className="product-thumb">
                <img src={props.img} alt="product" />
            </div>
        </div>
    );
}

export default ProductImageItem;