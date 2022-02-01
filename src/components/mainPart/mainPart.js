import React, { useState, useEffect, useContext } from 'react';
import { doc, getDoc } from 'firebase/firestore'

import { db } from '../../firebase'
import { useAuth } from '../../utils/hooks/useAuth'
import { ChatHeader, ChatMessages, ChatInput, Header } from '../'
import chatContext from '../../utils/context/chat'

export default function MainPart() {
    const [chat, setChat] = useState([]);
    const { receiversUID } = useContext(chatContext)
    const userInfo = useAuth();
    const userUID = userInfo?.currentUser?.uid
    const userName = userInfo?.currentUser?.displayName

    const getChat = async () => {
        const docRef = doc(db, "users", userUID, "chats", receiversUID)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            setChat(docSnap.data())
        } else {
            console.log("No such document!")
        }
    }

    const getTimeInHoursAndMinutes = (milliseconds) => {
        const currentDate = new Date(Date.now())
        const hours = new Date(milliseconds).getHours()
        const minutes = new Date(milliseconds).getMinutes()
        return (hours + ":" + minutes)
    }

    useEffect(() => {
        receiversUID && getChat()
    }, [receiversUID])

    return (
        <div className="bg-yellow-500 w-full">
            <Header />
            <div className="grid justify-items-center gap-4">
                <ChatHeader />
                <ChatMessages
                    chat={chat}
                    getTimeInHoursAndMinutes={getTimeInHoursAndMinutes}
                />
                <ChatInput
                    receiversUID={receiversUID}
                    userUID={userUID}
                    getChat={getChat}
                    userName={userName}
                />
            </div>
        </div>
    );
}
