import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore'

import { db } from '../../firebase'
import { useAuth } from '../../utils/hooks/useAuth'
import { ChatHeader, Header } from '../'

export default function MainPart() {
    const [chat, setChat] = useState([]);
    const receiversUID = "LJsCB5EBW3QWpc5zZIzkz1AU54m1"
    const userInfo = useAuth();
    const userUID = userInfo?.currentUser?.uid

    const getChat = async () => {
        const docRef = doc(db, "users", userUID, "chats", receiversUID)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            setChat(docSnap.data())
        } else {
            console.log("No such document!")
        }
    }

    useEffect(() => {
        getChat()
    }, [])

    console.log("chat: ", chat)
    return (
        <div className="bg-yellow-500 w-full">
            <Header />
            <div className="grid justify-items-center gap-4">
                <ChatHeader />
                <div className="border border-red-500 w-11/12 h-96">
                    <p>chat</p>
                </div>
                <div className="border border-blue-500 w-11/12 h-20">input</div>
            </div>
        </div>
    );
}
