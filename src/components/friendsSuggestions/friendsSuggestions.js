import React from 'react';

export default function FriendsSuggestions({ notFriends, addFriend }) {

    return (<div>
        <h4 className="font-bold">Suggestions for you</h4>
        {!notFriends ? <p>Loading...</p> :
            notFriends.map(user => <div className="flex justify-between mx-2" key={user.userId}>
                <p>
                    {user.username}
                </p>
                <button onClick={() => addFriend(user)}>
                    <p className="text-blue-700">Add</p>
                </button>
            </div>)}
    </div>);
}
