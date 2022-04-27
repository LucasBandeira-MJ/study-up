import styles from './styles.module.scss'

export const FullPageLoader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.ldsEllipsis}><div></div><div></div><div></div></div>
        </div>
    )
}