import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import According from './../../../commons/components/According'

CartSale.propTypes = {
    listProduct: PropTypes.array,
};

CartSale.defaultProps = {
    listProduct: []
}

function CartSale(props) {
    const {listProduct} = props

    const renderListSale = () =>{
        if(listProduct.length > 0){
            let flag = false;
            for(let productItem of listProduct){
                if(productItem.listSale.length > 0){
                    flag = true
                    break
                }
            }

            if(flag){
                return <According>
                    <div className="accordition-toggle--box cl">
                        <div className ="cart-sale">
                            <h3 className="removed-title">Khuyến mãi</h3>

                            {
                                listProduct.map((item, index) =>{

                                    let from = 1, sale = 0
                                    for(let saleItem of item.listSale){
                                        if(saleItem.from > item.amount){
                                            from = saleItem.from
                                            sale = saleItem.price
                                            break
                                        }
                                    }

                                    return (
                                        <div 
                                            key = {index}
                                            className="cart-sale__item"
                                        >
                                            <span>Với <a href="#/"><b>{item.title}</b></a> bạn sẽ được giảm giá ít nhất đến <strong>{sale}%</strong> khi mua từ {from} sản phẩm trở lên</span>
                                            <a href="#/" className = "read-more">Xem thêm</a>
                                        </div>
                                    )
                                })
                            }
                            
                        </div>
                    </div>
                </According>
            }

            return null
            
        }
        return null
    }

    return (renderListSale());
}

export default CartSale;