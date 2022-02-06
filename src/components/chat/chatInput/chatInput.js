import React from 'react';
import { useForm } from 'react-hook-form'
import { doc, updateDoc, arrayUnion } from 'firebase/firestore'

import { db } from '../../../firebase'

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

    await updateDoc(messagesRef, {
      messages: arrayUnion({
        time: Date.now(),
        msg: data.message,
        senderUID: userUID,
        senderName: userName
      })
    })
    await updateDoc(messagesRefReceiver, {
      messages: arrayUnion({
        time: Date.now(),
        msg: data.message,
        senderUID: userUID,
        senderName: userName
      })
    })
    reset()
    getChat()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" w-11/12 h-20" >
      <input placeholder="Bericht" {...register("message")} className="w-11/12 h-20" />
      <input type="submit" />
    </form>
  )
}
