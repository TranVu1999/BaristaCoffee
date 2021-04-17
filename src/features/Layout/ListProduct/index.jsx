import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../../../commons/components/ProductItem';

ListProduct.propTypes = {
    cols: PropTypes.number,
    listProduct: PropTypes.array,
};

ListProduct.defaultProps = {
    cols: 3,
    listProduct: []
}

function ListProduct(props) {

    const renderListProduct = () =>{

        return props.listProduct.map((item, index) =>{
            return (
                <ProductItem 
                    key = {index}
                    avatar = {item.avatar}
                    title = {item.title}
                    alias = {item.alias}
                    rating = {item.rating}
                    isExistCart = {false}
                    price = {item.price}
                    promo = {item.promo}
                />
            )
        })
    }

    return (
        <div className = {`d-gr-${props.cols} lst-product__container`}>
            {renderListProduct()}
        </div>
    );
}

export default ListProduct;