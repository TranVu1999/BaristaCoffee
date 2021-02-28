import React, { Component } from 'react';
import './style.scss';

export default class ConfirmInfo extends Component {
    render() {
        return (
            <div className="confirm-info">
                <h3>BilLing &amp; Shipping</h3>
                <form className="form-info-invoice">
                    <div className="row">
                        <div className="form-group">
                            <input type="text" className="input-control" placeholder="Full Name" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="input-control" placeholder="PostCode / Zip" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <input type="text" className="input-control" placeholder="City" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="input-control" placeholder="Province" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <input type="text" className="input-control" placeholder="Wards" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="input-control" placeholder="House number and street name" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <input type="text" className="input-control" placeholder="Phone" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="input-control" placeholder="Email" />
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}
