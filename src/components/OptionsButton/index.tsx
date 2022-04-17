import styles from './styles.module.sass'
import { FaCog } from 'react-icons/fa'

export const OptionsButton = () => {
    return (
        <button className={styles.optionsButton}>
            <FaCog />
        </button>
    )
}