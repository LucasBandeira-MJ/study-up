import { useState } from 'react'
import styles from './styles.module.sass'

export const ClockButton = () => {
    const [isActive, setIsActive] = useState(false)

    return (
        <button type="button" className={`
            ${styles.clockButton}
            ${isActive && styles.buttonActive}
        `}
        >
            {isActive ? 'Stop' : 'Start'}
        </button>
    )
}