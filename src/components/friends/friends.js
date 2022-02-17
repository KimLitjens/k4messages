import styles from './friends.styles'

export default function Friends({ friends, friendsLoaded, deleteFriend, setCurrentChat }) {

    return (
        <div>
            <h1 className={styles.Title}>Friends:</h1>
            <div>
                {!friendsLoaded ? <p>Loading...</p> : friends.map(friend => <div
                    className={styles.FriendDiv}
                    key={friend.userId}
                >
                    <button
                        className={styles.NameButton}
                        onClick={() => setCurrentChat(friend)}
                    >
                        {friend.username}
                    </button>
                    <button
                        className={styles.RemoveButton}
                        onClick={() => deleteFriend(friend)}>
                        Remove
                    </button>
                </div>)}
            </div>
        </div>
    );
}
