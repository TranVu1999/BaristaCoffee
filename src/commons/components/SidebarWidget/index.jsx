import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

SidebarWidget.propTypes = {
    
};

function SidebarWidget(props) {
    return (
        <div className="sidebar--widget">
            <h4>{props.title}</h4>
            {props.children}
        </div>
    );
}

export default SidebarWidget;