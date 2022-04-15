import { createContext, useContext, useEffect, useState } from "react";
import { ClockContext } from "./ClockContext";

interface LevelContextData {
    level: number
    currentExperience: number
    experienceToNextLevel: number
}

interface LevelProviderProps {
    children: React.ReactNode
}

export const LevelContext = createContext({} as LevelContextData)

export const LevelProvider = ({children}: LevelProviderProps) => {
    const { time } = useContext(ClockContext)

    const [level, setLevel] = useState<number>(1)
    const [currentExperience, setCurrentExperience] = useState<number>(0)

    const experienceToNextLevel = Math.pow((level + 1) * 5, 2)

    const levelUp = () => {
        setLevel(level => level + 1)
    }

    useEffect(() => {
        let totalExperience = currentExperience + 1

        if(totalExperience >= experienceToNextLevel) {
            totalExperience = totalExperience - experienceToNextLevel
            levelUp()
        }

        setCurrentExperience(totalExperience)
    }, [time])


    return (
        <LevelContext.Provider value={{
            level,
            currentExperience,
            experienceToNextLevel
        }}>
            {children}
        </LevelContext.Provider>
    )
}