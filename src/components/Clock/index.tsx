import { useState } from 'react'
import { ClockButton } from './ClockButton'
import styles from './styles.module.sass'


export const Clock = () => {
    const [time, setTime] = useState<number>(0)

    const hours = Math.floor(time / 3600)
    const minutes = Math.floor(time / 60 - hours * 60)
    const seconds = Math.floor(time % 60)

    const [hoursLeft, hoursRight] = String(hours).padStart(2, '0').split('')
    const [minutesLeft, minutesRight] = String(minutes).padStart(2, '0').split('')
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')

    return (
        <>
            <div className={styles.container}>
                <div>
                    <span>{hoursLeft}</span>
                    <span>{hoursRight}</span>
                </div>
                    <span>:</span>
                <div>
                    <span>{minutesLeft}</span>
                    <span>{minutesRight}</span>
                </div>
                    <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>

            </div>
            <ClockButton />
        </>
    )
}