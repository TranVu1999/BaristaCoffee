import React, {useState, useEffect} from 'react';
import './style.scss'
import PropTypes from 'prop-types';
import ProductImageItem from '../../../commons/components/ProductImageItem';

ProductThumb.propTypes = {
    listImage: PropTypes.array,
};

ProductThumb.defaultProps = {
    listImage: []
}

function ProductThumb(props) {
    const [idnexImageShow, setIndexImageShow] = useState(0)


    const onHanldeGetActiveImage = (indexImage) =>{
        setIndexImageShow(indexImage)
    }

    return (
        <div className="product-images">
            <div className="product-thumb">
                <img src={props.listImage[idnexImageShow]} alt="product avatar" />
            </div>

            <div className="d-flex-between product-lst-images">
                        
                {
                    props.listImage.map((item, index) =>{
                        return (
                            <ProductImageItem
                                key = {index}
                                img = {item}
                                indexImage = {index}
                                onGetIndexChose = {onHanldeGetActiveImage}
                                isActive = {idnexImageShow === index}
                            />
                        )
                    })
                }
                    
            </div>
        </div>
    );
}

export default ProductThumb;