import { createContext, useState } from "react";
import { OptionsModal } from "../components/OptionsModal";

interface OptionsProviderProps {
    children: React.ReactNode
}

interface OptionsContextData {
    isDarkMode?: boolean
    isOptionsModalOpen: boolean
    toggleTheme: () =>  void
    openOptionsModal: () => void
    closeOptionsModal: () => void
}

export const OptionsContext = createContext({} as OptionsContextData)

export const OptionsProvider = ({children}: OptionsProviderProps) => {
    const [isOptionsModalOpen, setIsOptionsModalOpen] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleTheme = () => {
        setIsDarkMode(theme => !theme)
    }

    const openOptionsModal = () => setIsOptionsModalOpen(true) 
    const closeOptionsModal = () => setIsOptionsModalOpen(false) 

    return (
        <OptionsContext.Provider value={{ 
            isDarkMode, 
            isOptionsModalOpen,
            toggleTheme,
            openOptionsModal,
            closeOptionsModal
        }}>
            {children}
            <OptionsModal />
        </OptionsContext.Provider>   
    )
}