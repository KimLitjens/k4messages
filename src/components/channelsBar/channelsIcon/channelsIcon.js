import React, { useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore";

import { db } from '../../../firebase'
import styles from './channelsIcon.styles'

export default function ChannelsIcon({ followingChannels }) {
    const [channelsInfo, setChannelsInfo] = useState([])

    const getChannelInfo = async () => {
        const channelsInfo = []
        const querySnapshot = await getDocs(collection(db, "channels"))
        await querySnapshot.forEach((doc) => {
            if (followingChannels.includes(doc.data().id)) { channelsInfo.push(doc.data()) }
        })
        setChannelsInfo(channelsInfo)
    }

    useEffect(() => {
        getChannelInfo()
    }, [followingChannels])

    return (
        <>
            <div className={styles.Icon}>
                <p>Ho</p>
            </div>
            {channelsInfo && channelsInfo.map(channel => <div key={channel.id} className={styles.Icon}>
                <p>{channel.name.charAt(0).toUpperCase()}{channel.name.charAt(1)}</p>
            </div>)}
        </>

    )
}
