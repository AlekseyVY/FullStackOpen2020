import React from 'react'
import './Notification.css'



const Notification = ({message}) => {
    if(message === null) {
        return null
    }

    return(
        <div className={'notification'}>
            <h2>{message}</h2>
        </div>
    )
}

export default Notification
