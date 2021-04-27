import React from 'react';
import './style.scss'
import {useSelector} from 'react-redux'
import Breadcrumb from '../../commons/components/Breadcrumb';
import CartBody from '../../features/ViewCart/CartBody/';
import CartRemoved from '../../features/ViewCart/CartRemoved';
import CartSale from '../../features/ViewCart/CartSale';


ViewCartPage.propTypes = {
    
};

function ViewCartPage(props) {
    const cartInfo = useSelector(state => state.cartReducer)
    
    return (
        <section className="main-page">
            <Breadcrumb title = "View Cart"/>

            <div className="cf-container cart-page">
                {cartInfo.removed.length > 0 ? (
                    <div>
                        <h3 className="removed-title">Removed</h3>
                        <CartRemoved listProduct = {cartInfo.removed}/>
                    </div>
                ) : null}

                <CartSale listProduct = {cartInfo.data}/>
                
                <CartBody listProduct = {cartInfo.data}/>
            </div>
            
        </section>
    );
}

export default ViewCartPage;