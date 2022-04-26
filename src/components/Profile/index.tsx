import { useSession } from 'next-auth/react'
import { useContext } from 'react'
import { LevelingContext } from '../../context/LevelingContext'
import styles from './styles.module.sass'

export const Profile = () => {
    const {data: session} = useSession()


    const { level } = useContext(LevelingContext)

    return (
        <div className={styles.profileContainer}>
            <img src={session?.user?.image || undefined} alt="Lucas Bandeira" />
            <div>
                <strong>{session?.user?.name}</strong>
                <p> Level {level} </p>
            </div>
        </div>
    )
}