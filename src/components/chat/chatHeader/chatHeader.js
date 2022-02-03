import React from 'react';

export default function ChatHeader({ userName, receiver }) {
    return <div><h2>{receiver ? receiver.username : `Welcom ${userName}`}</h2></div>;
}
