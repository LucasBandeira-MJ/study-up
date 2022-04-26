import styles from './styles.module.sass'

import { signOut } from 'next-auth/react'

export const SignOutButton = () => {
    return (
        <button 
            className={styles.signOutButton}
            onClick={() => signOut()}
        >
            Sign Out
        </button>
    )
}