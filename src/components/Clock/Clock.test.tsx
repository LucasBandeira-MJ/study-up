import { render, screen } from "@testing-library/react"
import { Clock } from "."
import { ClockContext } from "../../context/ClockContext"
import renderer from 'react-test-renderer'

describe("Clock component", () => {
    it('should render correctly', () => {
        render(
            <ClockContext.Provider value={{ hours: 2, minutes: 53, seconds: 14 } as any}>
                <Clock />
            </ClockContext.Provider>
        )

        const hoursLeft = screen.getByText('0')
        const hoursRight = screen.getByText('2')
        const minutesLeft = screen.getByText('5')
        const minutesRight = screen.getByText('3')
        const secondsLeft = screen.getByText('1')
        const secondsRight = screen.getByText('4')

        expect(hoursLeft).toBeInTheDocument()
        expect(hoursRight).toBeInTheDocument()
        expect(minutesLeft).toBeInTheDocument()
        expect(minutesRight).toBeInTheDocument()
        expect(secondsLeft).toBeInTheDocument()
        expect(secondsRight).toBeInTheDocument()
    })

    it('should match the snapshot', () => {
        const snapshot = renderer
            .create(
                <ClockContext.Provider value={{hours: 5, minutes: 23, seconds: 45} as any}>
                    <Clock />
                </ClockContext.Provider>
            ).toJSON()

            expect(snapshot).toMatchSnapshot()
      });

})