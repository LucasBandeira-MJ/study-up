
import { render, screen, fireEvent } from '@testing-library/react'

import { ClockButton } from '.'
import { LevelingContext } from '../../../context/LevelingContext'

describe("ClockButton component", () => {
    it("Should render properly when timer is not active", () => {
        render(
            <LevelingContext.Provider value={{isClockActive: false} as any}>
                <ClockButton />
            </LevelingContext.Provider>
        )

        expect(screen.getByText(/Start Timer/i)).toBeInTheDocument()
    })
    
    it("Should render properly when timer is active", () => {
        render(
            <LevelingContext.Provider value={{isClockActive: true} as any}>
                <ClockButton />
            </LevelingContext.Provider>
        )

        expect(screen.getByText(/Pause Timer/i)).toBeInTheDocument()
    })

    it('should trigger handleClock function when the button is clicked', () => {
        const handleClock = jest.fn()

        render(
            <LevelingContext.Provider value={{isClockActive: false, handleClock} as any}>
                <ClockButton />
            </LevelingContext.Provider>
        )

        const clockBtn = screen.getByText(/Start Timer/i)
        fireEvent.click(clockBtn)

        expect(handleClock).toHaveBeenCalled()
    })

    
    it('should Stop timer when button is clicked', () => {
        const stopClock = jest.fn()

        render(
            <LevelingContext.Provider value={{stopClock} as any}>
                <ClockButton variant="stop" />
            </LevelingContext.Provider>
        )

        const clockBtn = screen.getByText(/Stop Timer/i)
        fireEvent.click(clockBtn)

        expect(stopClock).toHaveBeenCalled()
    })

})