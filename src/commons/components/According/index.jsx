import React from 'react';

function According(props) {
    return (
        <div className = "accordition-toggle open">
            <div class="accordition-toggle--box">
                {props.children}
            </div>
        </div>
        
    );
}

export default According;