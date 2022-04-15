import { useContext } from 'react'
import { LevelContext } from '../../context/LevelContext'
import styles from './styles.module.sass'

export const ExperienceBar = () => {
    const { currentExperience, experienceToNextLevel } = useContext(LevelContext)

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div className={styles.experienceContainer}>
                <div 
                    className={styles.experienceFill}
                    style={{ width: `${percentToNextLevel}%` }}
                ></div>

                <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
                    {currentExperience} xp
                </span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    )
}