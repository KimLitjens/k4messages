import React from 'react';
import styles from './chatMessages.styles'

export default function ChatMessages({ chat, getTimeInHoursAndMinutes, userUID }) {
    return (
        <div className={styles.ChatDiv}>
            {chat.messages !== undefined && chat.messages.map(message => <div
                className={styles.MessageDiv}
                key={message.time}
            >
                <div className={styles.MessageFlexDiv}>
                    <h2 className={styles.H2}>
                        {message.senderName}
                    </h2>
                    <p className={styles.MessageDateTime}>
                        {getTimeInHoursAndMinutes(message.time)}
                    </p>
                    <div className={styles.TextDiv}>
                        <p className={styles.TextP({ userUID, message })} >
                            {message.msg}
                        </p>
                    </div>
                </div>

            </div>
            )}
        </div>);
}