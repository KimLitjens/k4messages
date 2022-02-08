import React, { useEffect, useState, useContext } from 'react';
import { doc, getDoc, collection, getDocs, updateDoc, arrayUnion, arrayRemove, setDoc } from 'firebase/firestore'

import { Friends, FriendsSuggestions } from '../'

import { db } from '../../firebase'
import { useAuth } from '../../utils/hooks/useAuth'
import chatContext from '../../utils/context/chat'

export default function SecondSidebar() {
    const [friendsUID, setFriendsUID] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const [friends, setFriends] = useState([]);
    const [notFriends, setNotFriends] = useState([]);
    const [friendsLoaded, setFriendsLoaded] = useState(false);
    const userInfo = useAuth();
    const userUID = userInfo?.currentUser?.uid

    const { setReceiver } = useContext(chatContext);
    const setCurrentChat = (userID) => setReceiver(userID)

    // Get all Users: 
    const getAllUsers = async () => {
        const allUsers = []
        const querySnapshot = await getDocs(collection(db, "users"))
        await querySnapshot.forEach((doc) => {
            if (doc.data().userId !== userUID) { allUsers.push(doc.data()) }
        })
        setAllUsers(allUsers)
    }

    //Divide users in friends and no friends:
    const divideUsersFriendNoFriend = async () => {
        const allFriends = []
        const noFriend = []
        setFriendsLoaded(false)
        await allUsers.map(user => friendsUID.includes(user.userId) ? allFriends.push(user) : noFriend.push(user))
        setFriends(allFriends)
        setNotFriends(noFriend)
        setFriendsLoaded(true)

    }

    // Get all the friendsUID from user:
    const getFriendsUID = async () => {
        const docRef = doc(db, "users", userUID)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            setFriendsUID(docSnap.data().friends)
        } else {
            console.log("No such document!")
        }
    }

    //Add Friend 
    const addFriend = async (selectedUser) => {
        const friendsRef = doc(db, "users", userUID)
        const chatRef = doc(db, "users", userUID, "chats", selectedUser.userId)
        const docSnap = await getDoc(chatRef)

        //add selected user UID to friends
        await updateDoc(friendsRef, {
            friends: arrayUnion(selectedUser.userId)
        })
        //add friend to chats if not excists yet
        if (!docSnap.exists()) {
            await setDoc(chatRef, {
                receiver: selectedUser.userId,
                messages: []
            })
        }
        setCurrentChat(selectedUser)
        getFriendsUID()
    }

    //Delete Friend
    const deleteFriend = async (friend) => {
        const friendsRef = doc(db, "users", userUID)

        await updateDoc(friendsRef, {
            friends: arrayRemove(friend.userId)
        })
        getFriendsUID()
    }

    useEffect(() => {
        getFriendsUID()
        getAllUsers()
    }, []);

    useEffect(() => {
        friendsUID && divideUsersFriendNoFriend()
    }, [friendsUID, allUsers])

    return (
        <div className="bg-yellow-500 h-screen w-52 ">
            <div className="bg-yellow-600 h-12">Search</div>
            <Friends
                friends={friends}
                friendsLoaded={friendsLoaded}
                setCurrentChat={setCurrentChat}
                deleteFriend={deleteFriend}
            />
            <FriendsSuggestions
                notFriends={notFriends}
                addFriend={addFriend}
            />
        </div>
    );
}
