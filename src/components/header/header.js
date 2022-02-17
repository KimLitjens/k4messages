import { useState, useEffect } from 'react';

import styles from './header.styles'
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
        <div className={styles.Area}>
            <h2 className={styles.H2}>{welcomeMessage}</h2>
            <h1 className={styles.H1}>K4 Messages</h1>
            <SignOutButton />
        </div>
    );
}
