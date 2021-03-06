import React from 'react';
import { useForm } from 'react-hook-form'
import {
  doc,
  getDoc,
  updateDoc,
  setDoc,
  arrayUnion
} from 'firebase/firestore'

import { db } from '../../../firebase'
import styles from './chatInput.styles'

export default function ChatInput({
  getChat,
  receiver,
  userName,
  userUID
}) {
  const { register, reset, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const messagesRef = doc(db, "users", userUID, "chats", receiver.userId)
    const messagesRefReceiver = doc(db, "users", receiver.userId, "chats", userUID)
    const docSnap = await getDoc(messagesRefReceiver)

    // add message to senders chat
    await updateDoc(messagesRef, {
      messages: arrayUnion({
        time: Date.now(),
        msg: data.message,
        senderUID: userUID,
        senderName: userName
      })
    })
    // add message to receivers chat
    if (docSnap.exists()) {
      await updateDoc(messagesRefReceiver, {
        messages: arrayUnion({
          time: Date.now(),
          msg: data.message,
          senderUID: userUID,
          senderName: userName
        })
      })
    } else {
      await setDoc(messagesRefReceiver, {
        receiver: userUID,
        messages: arrayUnion({
          time: Date.now(),
          msg: data.message,
          senderUID: userUID,
          senderName: userName
        })
      })
    }
    reset()
    getChat()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.Form} >
      <input
        placeholder="Bericht"
        {...register("message")}
        className={styles.Input}
      />
    </form>
  )
}
