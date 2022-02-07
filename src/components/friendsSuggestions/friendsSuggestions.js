import React from 'react';

export default function FriendsSuggestions({ notFriends }) {

    return (<div>
        <h4 className="font-bold">Suggestions for you</h4>
        {!notFriends ? <p>Loading...</p> :
            notFriends.map(user => <p>
                {user.username}
            </p>)}
    </div>);
}
