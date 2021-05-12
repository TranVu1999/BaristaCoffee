import React from 'react';
import PropTypes from 'prop-types';
import ListProduct from '../../Layout/ListProduct';

AccountListProduct.propTypes = {
    title: PropTypes.string,
    listProduct: PropTypes.array,
};

AccountListProduct.defaultProps = {
    title: "",
    listProduct: []
}

function AccountListProduct(props) {
    const {title, listProduct} = props
    const amount = listProduct.length

    const renderListProduct = () =>{
        console.log({listProduct})
        if(amount > 0){
            return <ListProduct listProduct = {listProduct}/>
        }
        return null
    }

    return (
        <div className="account-content--box">
            <span className="account__title">{title} ({amount})</span>

            <div className="account__content">
                <div className="row-product">
                    <ul className = "lst-product">
                        {renderListProduct()}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AccountListProduct;