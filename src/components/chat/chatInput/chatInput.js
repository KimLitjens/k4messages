import React from 'react';
import { useForm } from 'react-hook-form'

export default function ChatInput() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" w-11/12 h-20" >
      <input placeholder="Bericht" {...register("message")} className="w-11/12 h-20" />
      <input type="submit" />
    </form>
  )
}
