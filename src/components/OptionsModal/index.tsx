import { useContext } from 'react'
import Modal from 'react-modal'
import { OptionsContext } from '../../context/OptionsContext'

export const OptionsModal = () => {
    const { isOptionsModalOpen, isDarkMode, toggleTheme } = useContext(OptionsContext)

    return (
        <Modal isOpen={isOptionsModalOpen}>
            <div className="inputController">
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
        </Modal>
    )
}