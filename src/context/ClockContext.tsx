import { createContext, useEffect, useState } from "react";

let clockTimeout: NodeJS.Timeout

interface ClockContextData {
    time: number
    isActive: boolean
    showLevelingModal: boolean
    startClock: () => void
    pauseClock: () => void
    stopClock: () => void
    closeLevelingModal: () => void
}

interface ClockProviderProps {
    children: React.ReactNode
}

export const ClockContext = createContext({} as ClockContextData)

export const ClockProvider = ({children}: ClockProviderProps) => {
    const [time, setTime] = useState<number>(0)
    const [isActive, setIsActive] = useState<boolean>(false)
    const [showLevelingModal, setShowLevelingModal] = useState<boolean>(false)


    useEffect(() => {
        if(isActive) {
            clockTimeout = setTimeout(() => {
                setTime(time => time + 1)
            }, 1000)
        }
    }, [time, isActive])

    const startClock = () => {
        setIsActive(true)
    }

    const pauseClock = () => {
        clearInterval(clockTimeout)
        setIsActive(false)
    }

    const stopClock = () => {
        clearInterval(clockTimeout)
        setIsActive(false)
        setShowLevelingModal(true)
    }

    const closeLevelingModal = () => {
        setShowLevelingModal(false)
        setTime(0)
    }


    

    return (
        <ClockContext.Provider value={{
            time,
            isActive,
            showLevelingModal,
            startClock,
            pauseClock,
            stopClock,
            closeLevelingModal
        }}>
            {children}
        </ClockContext.Provider>
    )
}