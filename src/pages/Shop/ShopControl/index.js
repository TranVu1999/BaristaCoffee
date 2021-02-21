import React, { Component } from 'react';
import './style.scss';

export default class ShopControl extends Component {
    render() {
        return (
            <div className="d-flex-between lst-product__control">
                <span className="result-count">Showing all {this.props.amount} results</span>
                <form className="sort-lst-product">
                    <div className="form-group">
                    <div className="select-box">
                        <div className="d-flex-between select-result-box">
                        <span className="select-result">Sort by latest</span>
                        <span className="fs1 icon" aria-hidden="true" data-icon="C" />
                        </div>
                        <div className="select-option-box" />
                    </div>
                    </div>
                </form>
            </div>

        )
    }
}
