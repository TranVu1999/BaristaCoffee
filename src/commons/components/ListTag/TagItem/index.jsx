import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

TagItem.propTypes = {
    title: PropTypes.string,
    onGetTitle: PropTypes.func,
    isActive: PropTypes.bool,
};

TagItem.defaultProps = {
    title: "",
    onGetTitle: null, 
    isActive: false
}

function TagItem(props) {

    const onHandleGetTitle = (title) =>{
        if(props.onGetTitle){
            props.onGetTitle(title)
        }
    }

    return (
        <button 
            className = {props.isActive ? "tag-item active" : "tag-item"}
            onClick = {() => onHandleGetTitle(props.title)}
        >{props.title}</button>
    );
}

export default TagItem;