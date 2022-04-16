import { createContext, useContext, useEffect, useState } from "react";
import { LevelingModal } from "../components/LevelingModal";
import { ClockContext } from "./ClockContext";

interface LevelContextData {
    level: number
    currentExperience: number
    experienceToNextLevel: number
    totalExperience: number
    totalLevelUps: number
}

interface LevelProviderProps {
    children: React.ReactNode
}

export const LevelContext = createContext({} as LevelContextData)

export const LevelProvider = ({children}: LevelProviderProps) => {
    const { time } = useContext(ClockContext)

    const [level, setLevel] = useState<number>(1)
    const [currentExperience, setCurrentExperience] = useState<number>(0)
    const [totalExperience, setTotalExperience] = useState<number>(0)
    const [totalLevelUps, setTotalLevelUps] = useState<number>(0)

    const experienceToNextLevel = Math.pow((level + 1) * 2, 2)

    const levelUp = () => {
        setLevel(level => level + 1)
        setTotalLevelUps(totalLevelUps => totalLevelUps + 1)
    }

    useEffect(() => {
        console.log('uh')
        let finalExperience = !!time ?  currentExperience + 1 : currentExperience
        let totalExp = !! time ? totalExperience + 1 : totalExperience

        if(finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel
            levelUp()
        }

        setCurrentExperience(finalExperience)
        setTotalExperience(totalExp)
    }, [time])


    return (
        <LevelContext.Provider value={{
            level,
            currentExperience,
            experienceToNextLevel,
            totalExperience,
            totalLevelUps
        }}>
            {children}
            <LevelingModal />
        </LevelContext.Provider>
    )
}