import { useContext } from 'react'
import { LevelingContext } from '../../context/LevelingContext'
import styles from './styles.module.sass'

export const Profile = () => {
    const { level } = useContext(LevelingContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/LucasBandeira-MJ.png" alt="Lucas Bandeira" />
            <div>
                <strong>Lucas Bandeira</strong>
                <p> Level {level} </p>
            </div>
        </div>
    )
}