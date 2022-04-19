import { useContext, useState } from 'react'
import { LevelingContext } from '../../../context/LevelingContext'
import styles from './styles.module.sass'

interface ClockButtonProps {
    variant?: string
}

export const ClockButton = ({ variant }: ClockButtonProps) => {
    const { isClockActive, handleClock, stopClock } = useContext(LevelingContext)
    const isStopVariant = variant === 'stop'

    const handleClick = () => {
        if(isStopVariant) {
            stopClock()
        } else {
            handleClock()
        }
    }

    return (
        <button type="button" className={`
            ${styles.clockButton} 
            ${isStopVariant ? styles.stopButton : isClockActive && styles.buttonActive}
        `}
        onClick={handleClick}
        disabled={isStopVariant && isClockActive}
        >
            {isStopVariant ? 'Stop' : isClockActive ? 'Pause' : 'Start'} Timer
        </button>
    )
}