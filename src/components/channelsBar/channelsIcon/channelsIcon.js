import React from 'react'
import styles from './channelsIcon.styles'

export default function ChannelsIcon({ channels }) {
    return (

        <>
            <div className={styles.Icon}>
                <p>Ho</p>
            </div>
            {channels && channels.map(channel => <div className={styles.Icon}>
                <p>{channel.charAt(0).toUpperCase()}{channel.charAt(1)}</p>
            </div>)}
        </>

    )
}
