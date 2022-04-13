import { useContext } from 'react'
import styles from './styles.module.sass'

export const Profile = () => {

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/LucasBandeira-MJ.png" alt="Lucas Bandeira" />
            <div>
                <strong>Lucas Bandeira</strong>
                <p>
                    {/* <img src="icons/level.svg" alt="level" /> */}
                    Level <span>3</span>
                </p>
            </div>
        </div>
    )
}