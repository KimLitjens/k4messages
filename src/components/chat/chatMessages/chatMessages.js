import React from 'react';

export default function ChatMessages({ chat, getTimeInHoursAndMinutes }) {
    return (
        <div className="border border-red-500 w-11/12 h-96">
            {chat.messages !== undefined && chat.messages.map(message => <div key={message.time} >
                <div className="flex">
                    <h2 className="mx-4">{message.senderName}</h2>
                    <p>{getTimeInHoursAndMinutes(message.time)}</p>
                </div>
                <p>{message.msg}</p>
            </div>
            )}
        </div>);
}
