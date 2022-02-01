import React from 'react';
import { useForm } from 'react-hook-form'
import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore'

import { db } from '../../../firebase'

export default function ChatInput({ receiversUID, userUID }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  // const onSubmit = data => console.log(data);

  const onSubmit = async (data) => {
    const messagesRef = doc(db, "users", userUID, "chats", receiversUID)

    await updateDoc(messagesRef, {
      messages: arrayUnion({
        time: Date.now(),
        msg: data.message,
        senderUID: userUID,
        senderName: "kimslim"
      })
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" w-11/12 h-20" >
      <input placeholder="Bericht" {...register("message")} className="w-11/12 h-20" />
      <input type="submit" />
    </form>
  )
}
