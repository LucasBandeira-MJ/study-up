import type { NextPage } from 'next'
import { Clock } from '../components/Clock'
import { ExperienceBar } from '../components/ExperienceBar'
import { OptionsButton } from '../components/OptionsButton'
import { Profile } from '../components/Profile'
import { LevelingProvider } from '../context/LevelingContext'
import styles from '../styles/Home.module.sass'

const Home: NextPage = () => {
  return (
    <LevelingProvider>
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
      </LevelingProvider>
  )
}

export default Home
