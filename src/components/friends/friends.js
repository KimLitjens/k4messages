import React from 'react';

export default function Friends({ friends, friendsLoaded, setCurrentChat }) {

    return (
        <div>
            <h1>Friends:</h1>
            <div>
                {!friendsLoaded ? <p>Loading...</p> : friends.map(friend => <div className="my-2">
                    <button
                        onClick={() => setCurrentChat(friend)}
                        key={friend.userId}>
                        {friend.username}
                    </button>
                </div>)}
            </div>
        </div>
    );
}
