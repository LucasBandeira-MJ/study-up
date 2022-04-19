import { render, screen } from "@testing-library/react"
import { Clock } from "."
import renderer from 'react-test-renderer'
import { LevelingContext } from "../../context/LevelingContext"

describe("Clock component", () => {
    it('should render correctly', () => {
        render(
            <LevelingContext.Provider value={{ hours: 2, minutes: 53, seconds: 14 } as any}>
                <Clock />
            </LevelingContext.Provider>
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
                <LevelingContext.Provider value={{hours: 5, minutes: 23, seconds: 45} as any}>
                    <Clock />
                </LevelingContext.Provider>
            ).toJSON()

            expect(snapshot).toMatchSnapshot()
      });

})