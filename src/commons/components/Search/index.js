import React, { Component } from 'react';
import './style.scss';

export default class Search extends Component {
    render() {
        return (
           <form className="search">
                <div className="d-flex-center form-group">
                    <input type="text" placeholder="Type here..." />
                    <button><span aria-hidden="true" className="icon_search" /></button>
                </div>
            </form>

        )
    }
}
