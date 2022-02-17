import React from 'react';
import styles from './chatHeader.styles'

export default function ChatHeader({ userName, receiver }) {
    return <>
        <h2 className={styles.Title}>
            {receiver ? receiver.username :
                `Welcom ${userName}`}
        </h2>
    </>;
}
