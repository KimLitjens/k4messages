import React, { useState, useEffect, useContext } from 'react';
import { doc, getDoc } from 'firebase/firestore'
import moment from 'moment'

import { db } from '../../firebase'
import { useAuth } from '../../utils/hooks/useAuth'
import { ChatHeader, ChatMessages, ChatInput, Header } from '../'
import chatContext from '../../utils/context/chat'

export default function MainPart() {
    const [chat, setChat] = useState([]);
    const { receiver } = useContext(chatContext)
    const userInfo = useAuth();
    const userUID = userInfo?.currentUser?.uid
    const userName = userInfo?.currentUser?.displayName

    const getChat = async () => {
        const docRef = doc(db, "users", userUID, "chats", receiver.userId)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            setChat(docSnap.data())
        } else {
            console.log("No such document!")
        }
    }

    const getTimeInHoursAndMinutes = (milliseconds) => {
        const currentDate = new Date(Date.now())
        const dateYesterday = currentDate - 86400000

        if (moment(currentDate).format("L") === moment(milliseconds).format("L")) {
            return ("Today " + moment(currentDate).format("HH:MM"))
        } else if (moment(dateYesterday).format("L") === moment(milliseconds).format("L")) {
            return ("Yesterday " + moment(currentDate).format("HH:MM"))
        } else {
            return (moment(currentDate).format("DD-MM-YYYY"))
        }
    }

    useEffect(() => {
        receiver && getChat()
    }, [receiver])
    console.log(receiver)
    return (
        <div className="bg-yellow-500 w-full">
            <Header />
            <div className="grid justify-items-center gap-4">
                <ChatHeader
                    userName={userName}
                    receiver={receiver}
                />
                <ChatMessages
                    userUID={userUID}
                    chat={chat}
                    getTimeInHoursAndMinutes={getTimeInHoursAndMinutes}
                />
                <ChatInput
                    receiver={receiver}
                    userUID={userUID}
                    getChat={getChat}
                    userName={userName}
                />
            </div>
        </div>
    );
}
