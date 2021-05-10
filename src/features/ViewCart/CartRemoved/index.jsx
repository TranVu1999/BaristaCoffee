import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import According from './../../../commons/components/According'
import {NavLink} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {actUndoCart} from './../../../commons/modules/Cart/action'

CartRemoved.propTypes = {
    listProduct: PropTypes.array,
};

CartRemoved.defaultProps = {
    listProduct: []
}

function CartRemoved(props) {
    const {listProduct} = props
    const dispatch = useDispatch()

    const onHandleUndo = (id) =>{
        dispatch(actUndoCart(id))
    }

    const renderListProduct = ()=>{
        if(listProduct.length > 0){
            return listProduct.map((item, index) =>{
                return (
                    <According key = {index}>
                        <div className="accordition-toggle--box cl">
                            <div className ="d-flex-between">
                                <div className = "accordition-span accordition--left">
                                    <NavLink to = {`product-detail/${item.alias}`}>
                                        {item.title}
                                    </NavLink>
                                    
                                </div>
                                <button 
                                    className = "accordition-span accordition--right"
                                    onClick = {() => onHandleUndo(item.id)}
                                >Undo?</button>
                            </div>
                        </div>
                    </According>
                )
            })
        }

        return null
    }

    return (renderListProduct());
}

export default CartRemoved;