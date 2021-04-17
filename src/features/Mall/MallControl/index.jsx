import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './style.scss'

MallControl.propTypes = {
    sizeList: PropTypes.number,
    onChoseSort: PropTypes.func,
};

MallControl.defaultProps = {
    sizeList: 0,
    onChoseSort: null
}

function MallControl(props) {
    const listFilterSpan = [
        "Sort by popularity", 
        "Sort by average rating", 
        "Sort by lastest",
        "Sort by price: low to high",
        "Sort by price: high to low"
    ]

    const [openSelect, setOpenSelect] = useState(false)
    const [resultSpan, setResultSpan] = useState(listFilterSpan[2])

    const onHandleToggleSelectBox = () =>{
        setOpenSelect(!openSelect)
    }

    const handleChooseItem = index =>{
        setOpenSelect(false)
        setResultSpan(listFilterSpan[index])

        if(props.onChoseSort){
            props.onChoseSort(listFilterSpan[index])
        }

    }

    return (
        <div className="d-flex-between lst-product__control">
            <span className="result-count">Showing all <span className="number">{props.sizeList}</span> results</span>
            <form className="sort-lst-product">
                <div className="form-group">
                <div className="select-box">
                    <div 
                        className="d-flex-between select-result-box"
                        onClick = {onHandleToggleSelectBox}
                    >
                        <span className="select-result">{resultSpan}</span>
                        <span className="fs1 icon" aria-hidden="true" data-icon="C" />
                    </div>

                    <div 
                        className = {openSelect ? "select-option-box open" : "select-option-box"}
                    >
                        <div 
                            className = "select-item"
                            onClick = {() => handleChooseItem(0)}
                        >Sort by popularity</div>

                        <div 
                            className = "select-item"
                            onClick = {() => handleChooseItem(1)}
                        >Sort by average rating</div>

                        <div 
                            className = "select-item"
                            onClick = {() => handleChooseItem(2)}
                        >Sort by lastest</div>

                        <div 
                            className = "select-item"
                            onClick = {() => handleChooseItem(3)}
                        >Sort by price: low to high</div>

                        <div 
                            className = "select-item"
                            onClick = {() => handleChooseItem(4)}
                        >Sort by price: high to low</div>
                    </div>
                </div>
                </div>
            </form>
        </div>
    );
}

export default MallControl;