import styles from './styles.module.sass'
import { FaCog } from 'react-icons/fa'
import { useContext } from 'react'
import { OptionsContext } from '../../context/OptionsContext'

export const OptionsButton = () => {
    const { openOptionsModal } = useContext(OptionsContext)
    return (
        <button 
            className={styles.optionsButton}
            onClick={openOptionsModal}
        >
            <FaCog />
        </button>
    )
}