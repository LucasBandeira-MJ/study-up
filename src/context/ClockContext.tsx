import { createContext, useEffect, useState } from "react";

let clockTimeout: NodeJS.Timeout

interface ClockContextData {
    time: number
    hours: number
    minutes: number
    seconds: number
    isActive: boolean
    startClock: () => void
    pauseClock: () => void
    stopClock: () => void
}

interface ClockProviderProps {
    children: React.ReactNode
}

export const ClockContext = createContext({} as ClockContextData)

export const ClockProvider = ({children}: ClockProviderProps) => {
    const [time, setTime] = useState<number>(0)
    const [isActive, setIsActive] = useState<boolean>(false)

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
    }


    const hours = Math.floor(time / 3600)
    const minutes = Math.floor(time / 60 - hours * 60)
    const seconds = Math.floor(time % 60)

    return (
        <ClockContext.Provider value={{
            time,
            hours, 
            minutes, 
            seconds,
            isActive,
            startClock,
            pauseClock,
            stopClock
        }}>
            {children}
        </ClockContext.Provider>
    )
}