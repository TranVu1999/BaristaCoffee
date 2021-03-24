import React, { Component } from 'react';
import './style.scss';

class Notification extends Component {
    render() {
        return (
            <>
                {/* <div className = "neon-notify success">
                    <div className = "notify-content">
                        <span aria-hidden="true" className="icon_check_alt2"></span>
                        <strong>Well done!</strong>
                        You successfullyread this important.
                    </div>
                </div> */}

                <div className = "neon-notify error">
                    <div className = "notify-content">
                        <span aria-hidden="true" class="icon_close_alt2"></span>
                        <strong>Oh snap!</strong>
                        Change a few things up and try submitting again.
                    </div>
                </div>
            </>
        );
    }
}

export default  Notification;