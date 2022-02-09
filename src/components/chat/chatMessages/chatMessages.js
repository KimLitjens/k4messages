import React from 'react';

export default function ChatMessages({ chat, getTimeInHoursAndMinutes, userUID }) {
    return (
        <div className="overflow-auto border border-red-500 w-11/12 h-96">
            {chat.messages !== undefined && chat.messages.map(message => <div className="grid" key={message.time} >
                <div className="flex">
                    <h2 className="mx-4">{message.senderName}</h2>
                    <p>{getTimeInHoursAndMinutes(message.time)}</p>
                    <div className="grid w-full">
                        <p className={`mx-4 ${userUID == message.senderUID ? `justify-self-end` : `justify-self-start`} `} >{message.msg}</p>
                    </div>
                </div>

            </div>
            )}
        </div>);
}