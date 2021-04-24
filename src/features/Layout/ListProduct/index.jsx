import React from 'react';
import PropTypes from 'prop-types';
import ProductItem from '../../../commons/components/ProductItem';
import {useSelector} from 'react-redux'

ListProduct.propTypes = {
    cols: PropTypes.number,
    listProduct: PropTypes.array,
};

ListProduct.defaultProps = {
    cols: 3,
    listProduct: []
}

function ListProduct(props) {
    const cartInfo = useSelector(state => state.cartReducer)

    const renderListProduct = () =>{

        return props.listProduct.map((item, index) =>{

            let flag = false
            for(let cartItem of cartInfo.data){
                if(cartItem.id === item._id){
                    flag = true
                    break
                }
            }

            return (
                <ProductItem 
                    key = {index}
                    id = {item._id}
                    avatar = {item.avatar}
                    title = {item.title}
                    alias = {item.alias}
                    rating = {item.rating}
                    isExistCart = {flag}
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