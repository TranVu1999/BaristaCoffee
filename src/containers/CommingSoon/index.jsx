import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {actUpdateUrl} from './../../commons/modules/Url/actions'
import './style.scss'


function CommingSoonPage(props) {
    const dispatch = useDispatch()
    // Update url
    useEffect(() =>{
        const {url} = props.match
        dispatch(actUpdateUrl({
            url
        }))
    }, [])

    return (
        <div class="coming-soon-page">
            <div class="text-center coming-soon__content">
                <img src="http://127.0.0.1:5501/images/coming-soon-img-2.png" alt="logo"/>
                <p class="coming-soon--title">Coming soon!</p>
                <div class="d-flex-between count-down">
                    <div class="count-down--box">
                        <span class="count-down--number">23</span>
                        <span class="count-down--label">Months</span>
                    </div>
                    <div class="count-down--box">
                        <span class="count-down--number">30</span>
                        <span class="count-down--label">Days</span>
                    </div>
                    <div class="count-down--box">
                        <span class="count-down--number">07</span>
                        <span class="count-down--label">Hours</span>
                    </div>
                    <div class="count-down--box">
                        <span class="count-down--number">14</span>
                        <span class="count-down--label">Minutes</span>
                    </div>
                    <div class="count-down--box">
                        <span class="count-down--number">03</span>
                        <span class="count-down--label">Seconds</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommingSoonPage;