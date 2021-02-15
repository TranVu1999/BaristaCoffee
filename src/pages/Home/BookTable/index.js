import React, { Component } from 'react';
import TitleBox from '../../../commons/components/TitleBox';
import './style.scss';

export default class BookTable extends Component {
    render() {
        return (
            <section className="book-table">
                <TitleBox smallTitle = "What Happens Here" mainTitle = "Coffee Build Your Base"/>

                <div className="cf-container book-table__container">
                    <form className="mb-50 form-book-table">
                        <div className="d-flex-between">
                            <div className="form-group">
                                <input type="text" placeholder="1 Person" />
                                <span className="form-book-table--icon"><i className="fas fa-users" /></span>
                            </div>

                            <span className="form-book-table--label">FOR</span>

                            <div className="form-group">
                                <input type="text" placeholder="12.28.2020" />
                                <span className="form-book-table--icon"><i className="far fa-calendar-alt" /></span>
                            </div>

                            <span className="form-book-table--label">AT</span>

                            <div className="form-group">
                                <input type="text" placeholder="7:00 pm" />
                                <span className="form-book-table--icon"><i className="far fa-clock" /></span>
                            </div>

                            <div className="form-group">
                                <button className="barista-btn">Book a Table</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

        )
    }
}
