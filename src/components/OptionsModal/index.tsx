import styles from './styles.module.sass'
import { IoMdClose } from 'react-icons/io'

import { useContext } from 'react'
import Modal from 'react-modal'
import { OptionsContext } from '../../context/OptionsContext'

export const OptionsModal = () => {
    const { isOptionsModalOpen, isDarkMode, toggleTheme, closeOptionsModal } = useContext(OptionsContext)

    return (
        <Modal 
            isOpen={isOptionsModalOpen}
            className={styles.optionsModal}
        >
            <div className={styles.inputController}>
                <label htmlFor="darkmode">
                    Dark mode
                </label>

                <input 
                    type="checkbox" 
                    id="darkmode" 
                    onChange={toggleTheme}
                    checked={isDarkMode} 
                />
            </div>

            <button className={styles.closeModal} onClick={closeOptionsModal}>
                <IoMdClose />
            </button>
        </Modal>
    )
}