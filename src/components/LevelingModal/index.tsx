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
        >
         <header>On this session you've earned</header>   
         <p>{totalExperience} xp</p>
         <p>{totalLevelUps} Levels</p>
         <button type="button" onClick={closeLevelingModal}>
             Cool!
         </button>
        </Modal>
    )
}