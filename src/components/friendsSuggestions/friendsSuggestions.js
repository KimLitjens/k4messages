import styles from './friendsSuggestions.styles'

export default function FriendsSuggestions({ notFriends, addFriend }) {

    return (<div>
        <h4 className={styles.H4}>
            Suggestions for you
        </h4>
        {!notFriends ? <p>Loading...</p>
            : notFriends.map(user => <div
                className={styles.NotFriendsDiv}
                key={user.userId}
            >
                <p className={styles.Name}>
                    {user.username}
                </p>
                <button onClick={() => addFriend(user)}>
                    <p className={styles.ButtonText}>
                        Add
                    </p>
                </button>
            </div>)}
    </div>);
}
