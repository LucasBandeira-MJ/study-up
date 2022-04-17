import styles from './styles.module.sass'

import Modal from 'react-modal'
import { useContext } from 'react'
import { LevelContext } from '../../context/LevelContext'
import { ClockContext } from '../../context/ClockContext'

export const LevelingModal = () => {
    const { totalExperience, totalLevelUps } = useContext(LevelContext)
    const { showLevelingModal, closeLevelingModal } = useContext(ClockContext)
    return (
        <Modal
            isOpen={showLevelingModal}
            className={styles.levelingModal}
        >
        <header>You've earned</header>   
        <p>
            <span>{totalExperience}</span> xp
        </p>
         {!!totalLevelUps && <p><span>{totalLevelUps}</span> Levels</p>}
         
         <button type="button" onClick={closeLevelingModal}>
             Cool!
         </button>
        </Modal>
    )
}