import React, { Component } from 'react';
import './style.scss';

export default class TagItem extends Component {
    render() {
        return (
            <a href="/#" className="tag">{this.props.tagTitle}</a>
        )
    }
}
