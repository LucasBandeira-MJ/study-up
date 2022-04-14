import { useContext, useState } from 'react'
import { ClockContext } from '../../../context/ClockContext'
import styles from './styles.module.sass'

export const ClockButton = () => {
    const { isActive, startClock, pauseClock } = useContext(ClockContext)

    const handleClick = () => {
        if(isActive) {
            pauseClock()
        } else {
            startClock()
        }
    }

    return (
        <button type="button" className={`
            ${styles.clockButton} 
            ${isActive && styles.buttonActive}
        `}
        onClick={handleClick}
        >
            {isActive ? 'Stop' : 'Start'} Timer
        </button>
    )
}