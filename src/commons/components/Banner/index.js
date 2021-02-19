import React, { Component } from 'react';
import './style.scss';

export default class Banner extends Component {
    render() {
        return (
            <div className="page dark banner" style={{backgroundImage: 'url(https://res.cloudinary.com/doem0ysxl/image/upload/v1611851621/BaristaCoffee/banners/banner6_haqpao.jpg)'}}>
                <div className="py-0 banner__content">
                    <div className="d-flex-center banner--text">
                        <h1>About Me</h1>
                    </div>
                </div>
            </div>

        )
    }
}
