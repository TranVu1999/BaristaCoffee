import React, { Component } from 'react';
import './style.scss';

class Navigation extends Component {
    render() {
        return (
            <section className="nav">
                <div className="d-flex-between cf-container nav__content">
                    <button className="nav--left"><i className="fas fa-arrow-left" /></button>
                    <ul>
                    <li className="nav--number active"><a href="/#">1</a></li>
                    <li className="nav--number"><a href="/#">2</a></li>
                    <li className="nav--number"><a href="/#">3</a></li>
                    </ul>
                    <button className="nav--right"><i className="fas fa-arrow-right" /></button>
                </div>
            </section>

        );
    }
}

export default Navigation;