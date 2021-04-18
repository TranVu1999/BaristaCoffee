import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';

SidebarListProduct.propTypes = {
    listProduct: PropTypes.array,
};

SidebarListProduct.defaultProps = {
    listProduct: []
}

function SidebarListProduct(props) {

    const renderProductItem = () =>{
        if(props.listProduct){
            return props.listProduct.map((item, index) =>{
                return <ProductItem
                    key = {index}
                    alias = {item.alias}
                    avatar = {item.avatar}
                    title = {item.title}
                    rating = {item.rating}
                    promo = {item.promo}
                    price = {item.price}
                />
            })
        }
    }

    return (
        <div className="lst-prod">
            {renderProductItem()}
        </div>
    );
}

export default SidebarListProduct;