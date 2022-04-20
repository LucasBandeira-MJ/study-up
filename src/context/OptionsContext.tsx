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
}

export const OptionsContext = createContext({} as OptionsContextData)

export const OptionsProvider = ({children}: OptionsProviderProps) => {
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [isOptionsModalOpen, setIsOptionsModalOpen] = useState(true)

    const toggleTheme = () => {
        setIsDarkMode(theme => !theme)
        setIsOptionsModalOpen(false)
    }

    const openOptionsModal = () => {
        setIsOptionsModalOpen(true)
    }

    return (
        <OptionsContext.Provider value={{ 
            isDarkMode, 
            isOptionsModalOpen,
            toggleTheme,
            openOptionsModal
        }}>
            {children}
            <OptionsModal />
        </OptionsContext.Provider>   
    )
}