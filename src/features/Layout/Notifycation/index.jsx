import React, {useEffect} from 'react';
import {useDispatch, useSelector } from 'react-redux'
import './style.scss'
import {actCloseNotify} from './../../../commons/modules/Notify/action'

function Notifycation(props) {
    const isSuccess = useSelector(state => state.notifyReducer.isSuccess)
    const content = useSelector(state => state.notifyReducer.content)
    const isOpen = useSelector(state => state.notifyReducer.isOpen)
    const dispatch = useDispatch()

    useEffect(() => {
        let timer = null
        const closeNotifyPopup = () =>{
            timer = setTimeout(() =>{
                dispatch(actCloseNotify())
            }, 3000)
        }
        closeNotifyPopup()
        
        return () => {
            clearTimeout(timer)
        }
    })

    const renderClassNotify = () =>{
        let strClass = '';
        if(isOpen){
            strClass = 'neon-notify open';
        }else{
            strClass = 'neon-notify';
        }

        if(isSuccess){
            strClass += ' success';
        }else{
            strClass += ' error';
        }
        return strClass;
    }

    const renderNotifyContent = () =>{
        return isSuccess? (
            <div className = "notify-content">
                <span aria-hidden="true" className="icon_check_alt2"></span>
                <strong>Well done! </strong>
                {content}
            </div>
        ) : (
            <div className = "notify-content">
                <span aria-hidden="true" class="icon_close_alt2"></span>
                <strong>Oh snap! </strong>
                {content}
            </div>
        )
        
    }

    return (
        <div className = {renderClassNotify()}>
            {renderNotifyContent()}
        </div>
    );
}

export default Notifycation;