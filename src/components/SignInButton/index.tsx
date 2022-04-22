import styles from './styles.module.sass'
import { FaGithub } from 'react-icons/fa'

export const SignInButton = () => {
    return (
        <button
            type="button"
            className={styles.signInButton}
        >
            <FaGithub /> 
            <span>Sign in with Github</span>
        </button>
    )
}