import { useContext } from 'react'
import { LevelContext } from '../../context/LevelContext'
import styles from './styles.module.sass'

export const Profile = () => {
    const { level } = useContext(LevelContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/LucasBandeira-MJ.png" alt="Lucas Bandeira" />
            <div>
                <strong>Lucas Bandeira</strong>
                <p>
                    Level <span>{level}</span>
                </p>
            </div>
        </div>
    )
}