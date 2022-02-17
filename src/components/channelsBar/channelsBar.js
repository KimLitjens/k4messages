import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore'

import { db } from '../../firebase'
import { useAuth } from '../../utils/hooks/useAuth'
import styles from './channelsBar.styles'

export default function ChannelsBar() {
    const userInfo = useAuth();
    const userUID = userInfo?.currentUser?.uid
    const userName = userInfo?.currentUser?.displayName

    const [channels, setChannels] = useState([])

    const getChannels = async () => {
        const docRef = doc(db, "users", userUID)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            setChannels(docSnap.data().channels)
        } else {
            console.log("No such document")
        }
    }

    useEffect(() => {
        userUID && getChannels()
    }, [userUID])

    console.log(channels)
    return (
        <div className={styles.Area}>
            <div>
                <div className="p-2 m-2 border border-sky-500 rounded-full">
                    <p>St</p>
                </div>
                {channels && channels.map(channel => <div className="p-2 m-2 border border-sky-500 rounded-full">
                    <p>{channel.charAt(0).toUpperCase()}{channel.charAt(1)}</p>
                </div>)}
            </div>
        </div>
    );
}
