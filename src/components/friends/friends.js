import React from 'react';

import styles from './friends.styles'

export default function Friends({ friends, friendsLoaded, deleteFriend, setCurrentChat }) {

    return (
        <div>
            <h1>Friends:</h1>
            <div>
                {!friendsLoaded ? <p>Loading...</p> : friends.map(friend => <div
                    className={styles.FriendDiv}
                    key={friend.userId}
                >
                    <button
                        onClick={() => setCurrentChat(friend)}
                    >
                        {friend.username}
                    </button>
                    <button onClick={() => deleteFriend(friend)}>
                        <p>Remove</p>
                    </button>
                </div>)}
            </div>
        </div>
    );
}
