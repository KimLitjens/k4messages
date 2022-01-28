import React, { useState, useEffect } from 'react';

import { doc, getDoc } from 'firebase/firestore'

import { db } from '../../firebase'
import { useAuth } from '../../utils/hooks/useAuth'

export default function Friends() {
    const [friendsUID, setFriendsUID] = useState([]);
    const [friends, setFriends] = useState([]);
    const userInfo = useAuth();
    const userUID = userInfo?.currentUser?.uid

    const getFriendsName = async () => {
        const allFriends = []

        friendsUID.map(async UIDFriend => {
            const docRef = doc(db, "users", UIDFriend)
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                allFriends.push(docSnap.data().username)
                setFriends(allFriends)
            } else {
                console.log("No such document!")
            }
        })
    }

    const getFriendsUID = async () => {
        const docRef = doc(db, "users", userUID)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            setFriendsUID(docSnap.data().friends)
        } else {
            console.log("No such document!")
        }
    }

    useEffect(() => {
        getFriendsUID();
    }, []);

    useEffect(() => {
        friendsUID && getFriendsName()
    }, [friendsUID])

    return (
        <div>
            <h1>All the friends</h1>
            <div>
                <ul>
                    {console.log(friends)}
                    {friends.map(friend => <li>{friend}</li>)}
                </ul>
            </div>
        </div>
    );
}
