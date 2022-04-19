import { render, screen } from "@testing-library/react"
import { ExperienceBar } from "."
import { LevelingContext } from "../../context/LevelingContext"
import renderer from 'react-test-renderer'


describe("ExperienceBar component", () => {
    it("should render correctly", () => {
        render (
            <LevelingContext.Provider value={{ currentExperience: 300, experienceToNextLevel: 1440  } as any }>
                <ExperienceBar />
            </LevelingContext.Provider>
        )

        const initialExperience = screen.queryAllByText(/0 xp/)[0]
        const currentExperience = screen.getByText(/300 xp/)
        const experienceToNextLevel = screen.getByText(/1440 xp/)

        expect(initialExperience).toBeInTheDocument()
        expect(currentExperience).toBeInTheDocument()
        expect(experienceToNextLevel).toBeInTheDocument()
    })

    it('should match the snapshot', () => {
        const snapshot = renderer
            .create(
                <LevelingContext.Provider value={{ currentExperience: 350, experienceToNextLevel: 10440 } as any}>
                    <ExperienceBar />
                </LevelingContext.Provider>
            ).toJSON()

            expect(snapshot).toMatchSnapshot()
      });
})