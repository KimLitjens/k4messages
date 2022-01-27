import React, { useState, useEffect } from 'react';

import { SignOutButton } from '../'
import { useAuth } from '../../utils/hooks/useAuth'


export default function Header() {
    const userInfo = useAuth()
    const [auth, setAuth] = useState({});

    useEffect(() => {
        setAuth(userInfo)

    }, [userInfo]);

    const welcomeMessage = auth?.currentUser?.displayName
        ? `Welcome ${auth?.currentUser?.displayName}`
        : 'Welcome';

    return (
        <div className="bg-yellow-600 h-12 flex justify-between">
            <h2 className="ml-4 flex self-center text-center">{welcomeMessage}</h2>
            <h1 className="text-center text-3xl font-bold underline">K4 Messages</h1>
            <SignOutButton />
        </div>
    );
}
