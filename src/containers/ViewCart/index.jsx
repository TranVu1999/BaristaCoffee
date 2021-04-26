import React from 'react';
import './style.scss'
import {useSelector} from 'react-redux'
import Breadcrumb from '../../commons/components/Breadcrumb';
import CartBody from '../../features/ViewCart/CartBody/';


ViewCartPage.propTypes = {
    
};

function ViewCartPage(props) {
    const cartInfo = useSelector(state => state.cartReducer)
    
    return (
        <section className="main-page">
            <Breadcrumb title = "View Cart"/>

            <div className="cf-container cart-page">
                <CartBody listProduct = {cartInfo.data}/>
            </div>
            
        </section>
    );
}

export default ViewCartPage;