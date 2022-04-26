import { LevelingProvider } from "./LevelingContext"
import { OptionsProvider } from "./OptionsContext"
import { SessionProvider } from 'next-auth/react'

interface ContextProviderProps {
    children: React.ReactNode
}

export const ContextProvider = ({children}: ContextProviderProps) => {
    return (
        <SessionProvider>
            <OptionsProvider>
                <LevelingProvider>
                    {children}
                </LevelingProvider>
            </OptionsProvider>
        </SessionProvider>
    )
}