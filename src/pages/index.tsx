import type { NextPage } from 'next'
import { Clock } from '../components/Clock'
import { ExperienceBar } from '../components/ExperienceBar'
import { OptionsButton } from '../components/OptionsButton'
import { Profile } from '../components/Profile'
import { ClockProvider } from '../context/ClockContext'
import { LevelProvider } from '../context/LevelContext'
import styles from '../styles/Home.module.sass'

const Home: NextPage = () => {
  return (
    <ClockProvider>
      <LevelProvider>
        <div className={styles.container}>
          <ExperienceBar />
          <main>
            <section className={styles.infoContainer}>
              <Profile />
              <OptionsButton />
            </section>
            <Clock /> 
          </main>
        </div>
      </LevelProvider>
    </ClockProvider>
  )
}

export default Home
