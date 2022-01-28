import React, { useState, useEffect } from 'react';

import { doc, getDoc } from 'firebase/firestore'

import { db } from '../../firebase'
import { useAuth } from '../../utils/hooks/useAuth'

export default function Friends() {
    const [friends, setFriends] = useState([]);
    const userInfo = useAuth();
    const userUID = userInfo?.currentUser?.uid

    const getFriends = async () => {
        const docRef = doc(db, "users", userUID)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            setFriends(docSnap.data().friends)
        } else {
            console.log("No such document!")
        }
    }

    useEffect(() => {
        getFriends();
    }, []);

    return <div>
        <h1>All the friends</h1>
        {friends.map(friend => <p>{friend}</p>)}
    </div>;
}
