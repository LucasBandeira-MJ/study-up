import styles from './styles.module.sass'
import { FaGithub } from 'react-icons/fa'
import { signIn } from 'next-auth/react'

export const SignInButton = () => {
    return (
        <button
            type="button"
            className={styles.signInButton}
            onClick={() => signIn('github')}
        >
            <FaGithub /> 
            <span>Sign in with Github</span>
        </button>
    )
}