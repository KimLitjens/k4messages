import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore'

import { ChannelsIcon } from '../'
import { db } from '../../firebase'
import { useAuth } from '../../utils/hooks/useAuth'
import styles from './channelsBar.styles'

export default function ChannelsBar() {
    const userInfo = useAuth();
    const userUID = userInfo?.currentUser?.uid

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
            <ChannelsIcon channels={channels} />
        </div>
    );
}
