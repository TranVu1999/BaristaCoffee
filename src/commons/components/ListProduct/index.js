import React from 'react'
import ProductItem from './ProductItem'

function ListProduct(props) {
    const renderListProduct = () =>{
        const {listProduct, dataCart} = props

        if(listProduct){
            return listProduct.map((item, index) =>{
                let isExistCart = false;

                for(let itemCart of dataCart){
                    if(itemCart.prodId === item.productId){
                        isExistCart = true;
                        break;
                    }
                }

                return <ProductItem 
                            key = {index} 
                            productAvatar = {item.productAvatar}
                            productAlias = {item.productAlias}
                            productTitle = {item.productTitle}
                            rating = {item.rating}
                            productPromo = {item.productPromo}
                            productPrice = {item.productPrice}
                            isExistCart = {isExistCart}
                        />
                
            })
        }
        return null;
        
    }

    return (
        <div 
            className= {
                props.rowShow 
                ?`d-gr-${props.rowShow} lst-product__container`
                : "d-gr-4 lst-product__container"
            }
        > 
            {renderListProduct()}
        </div>
    )
}

export default ListProduct
