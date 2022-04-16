import { useContext, useState } from 'react'
import { ClockContext } from '../../../context/ClockContext'
import styles from './styles.module.sass'

interface ClockButtonProps {
    variant?: string
}

export const ClockButton = ({ variant }: ClockButtonProps) => {
    const { isActive, startClock, pauseClock, stopClock } = useContext(ClockContext)
    const isStopVariant = variant === 'stop'

    const handleClick = () => {
        if(isStopVariant) {
            stopClock()
        }else if(isActive) {
            pauseClock()
        } else {
            startClock()
        }
    }

    return (
        <button type="button" className={`
            ${styles.clockButton} 
            ${isStopVariant ? styles.stopButton : isActive && styles.buttonActive}
        `}
        onClick={handleClick}
        disabled={isStopVariant && isActive}
        >
            {isStopVariant ? 'Stop' : isActive ? 'Pause' : 'Start'} Timer
        </button>
    )
}