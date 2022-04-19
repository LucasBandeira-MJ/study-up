import { createContext, ReactNode, useEffect, useState } from "react";

let clockTimeout: NodeJS.Timeout

interface LevelingContextData {
    time: number
    isClockActive: boolean
    showLevelingModal: boolean
    level: number
    currentExperience: number
    experienceToNextLevel: number
    totalExperience: number
    totalLevelUps: number
    handleClock: () => void
    stopClock: () => void
    closeLevelingModal: () => void
}

interface LevelingProviderProps {
    children: ReactNode
}

export const LevelingContext = createContext({} as LevelingContextData)

export const LevelingProvider = ({ children }: LevelingProviderProps) => {
    const [time, setTime] = useState<number>(0)
    const [isClockActive, setIsClockActive] = useState<boolean>(false)
    const [showLevelingModal, setShowLevelingModal] = useState<boolean>(false)
    const [level, setLevel] = useState<number>(1)
    const [currentExperience, setCurrentExperience] = useState<number>(0)
    const [totalExperience, setTotalExperience] = useState<number>(0)
    const [totalLevelUps, setTotalLevelUps] = useState<number>(0)

    const experienceToNextLevel = Math.pow((level + 1) * 2, 2)

    const handleClock = () => {
        if(isClockActive) {
            clearInterval(clockTimeout)
            setIsClockActive(false)
        } else {
            setIsClockActive(true)
        }
    }

    const stopClock = () => {
        clearInterval(clockTimeout)
        setIsClockActive(false)
        setShowLevelingModal(true)
    }

    const closeLevelingModal = () => {
        setShowLevelingModal(false)
        setTime(0)
    }


    const levelUp = () => {
        setLevel(level => level + 1)
        setTotalLevelUps(totalLevelUps => totalLevelUps + 1)
    }


    useEffect(() => {
        if(isClockActive) {
            clockTimeout = setTimeout(() => {
                setTime(time => time + 1)
            }, 1000)
        }
    }, [time, isClockActive])

    useEffect(() => {
        let finalExperience = !!time ?  currentExperience + 1 : currentExperience
        let totalExp = !!time ? totalExperience + 1 : totalExperience

        if(finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel
            levelUp()
        }

        setCurrentExperience(finalExperience)
        setTotalExperience(totalExp)
    }, [time])


    return (
        <LevelingContext.Provider value={{
            time,
            isClockActive,
            showLevelingModal,
            level,
            currentExperience,
            experienceToNextLevel,
            totalExperience,
            totalLevelUps,
            handleClock,
            stopClock,
            closeLevelingModal
        }}>
            {children}
        </LevelingContext.Provider>
    )
}

