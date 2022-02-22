import React, { useState, useEffect } from 'react';
import { doc, getDoc, collection, addDoc } from 'firebase/firestore'

import { ChannelsIcon } from '../'
import { db } from '../../firebase'
import { useAuth } from '../../utils/hooks/useAuth'
import styles from './channelsBar.styles'

export default function ChannelsBar() {
    const userInfo = useAuth();
    const userUID = userInfo?.currentUser?.uid

    const [followingChannels, setFollowingChannels] = useState([])

    const getChannelsFollowing = async () => {
        const docRef = doc(db, "users", userUID)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            setFollowingChannels(docSnap.data().channels)
        } else {
            console.log("No such document")
        }
    }

    useEffect(() => {
        userUID && getChannelsFollowing()
    }, [userUID])

    return (
        <div className={styles.Area}>
            <ChannelsIcon followingChannels={followingChannels} />
        </div>
    );
}
