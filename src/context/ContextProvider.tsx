import { LevelingProvider } from "./LevelingContext"
import { OptionsProvider } from "./OptionsContext"

interface ContextProviderProps {
    children: React.ReactNode
}

export const ContextProvider = ({children}: ContextProviderProps) => {
    return (
        <OptionsProvider>
            <LevelingProvider>
                {children}
            </LevelingProvider>
        </OptionsProvider>
    )
}