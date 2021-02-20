import React, { Component } from 'react';
import './style.scss';
import TagItem from './TagItem';

class ListTag extends Component {
    render() {
        return (
           <div className="lst-tag">
                <TagItem tagTitle = "Coffee Cup"/>
                <TagItem tagTitle = "Coffee Pot"/>
                <TagItem tagTitle = "Coffee Treats"/>
                <TagItem tagTitle = "Ground Coffee"/>
                <TagItem tagTitle = "Paper Bag"/>
            </div>
        );
    }
}

export default ListTag;