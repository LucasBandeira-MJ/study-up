
import { render, screen, fireEvent } from '@testing-library/react'

import { ClockButton } from '.'
import { ClockContext } from '../../../context/ClockContext'

describe("ClockButton component", () => {
    it("Should render properly when timer is not active", () => {
        render(
            <ClockContext.Provider value={{isActive: false} as any}>
                <ClockButton />
            </ClockContext.Provider>
        )

        expect(screen.getByText(/Start Timer/i)).toBeInTheDocument()
    })
    
    it("Should render properly when timer is active", () => {
        render(
            <ClockContext.Provider value={{isActive: true} as any}>
                <ClockButton />
            </ClockContext.Provider>
        )

        expect(screen.getByText(/Stop Timer/i)).toBeInTheDocument()
    })

    it('should start timer when button is clicked', () => {
        const startClock = jest.fn()

        render(
            <ClockContext.Provider value={{isActive: false, startClock} as any}>
                <ClockButton />
            </ClockContext.Provider>
        )

        const clockBtn = screen.getByText(/Start Timer/i)
        fireEvent.click(clockBtn)

        expect(startClock).toHaveBeenCalled()
    })

    

    it('should pause timer when button is clicked', () => {
        const pauseClock = jest.fn()

        render(
            <ClockContext.Provider value={{isActive: true, pauseClock} as any}>
                <ClockButton />
            </ClockContext.Provider>
        )

        const clockBtn = screen.getByText(/Stop Timer/i)
        fireEvent.click(clockBtn)

        expect(pauseClock).toHaveBeenCalled()
    })

})