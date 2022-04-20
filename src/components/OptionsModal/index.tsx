import styles from './styles.module.sass'
import { IoMdClose } from 'react-icons/io'

import { useContext } from 'react'
import Modal from 'react-modal'
import { OptionsContext } from '../../context/OptionsContext'
import { OptionSwitch } from './OptionSwitch'

export const OptionsModal = () => {
    const { isOptionsModalOpen, isDarkMode, toggleTheme, closeOptionsModal } = useContext(OptionsContext)

    const handleThemeChange = () => {
        toggleTheme()
    }

    return (
        <Modal 
            isOpen={isOptionsModalOpen}
            className={styles.optionsModal}
        >
            <div className={styles.inputController}>
                <label htmlFor="darkmode">
                    Dark mode
                </label>

                <OptionSwitch
                    onHandleChange={handleThemeChange}
                    isChecked={isDarkMode}
                    switchId={'darkmode'}
                 />
            </div>

            <button className={styles.closeModal} onClick={closeOptionsModal}>
                <IoMdClose />
            </button>
        </Modal>
    )
}