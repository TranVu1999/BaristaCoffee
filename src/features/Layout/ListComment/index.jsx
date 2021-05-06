import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

ListComment.propTypes = {
    
};

function ListComment(props) {

    return (
        <div className = "cmt-list">
            {props.children}
        </div>
    );
}

export default ListComment;