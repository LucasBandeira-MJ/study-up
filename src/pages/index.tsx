import type { NextPage } from 'next'
import { Clock } from '../components/Clock'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { ClockProvider } from '../context/ClockContext'
import styles from '../styles/Home.module.sass'

const Home: NextPage = () => {
  return (
    <ClockProvider>
      <div className={styles.container}>
        <ExperienceBar />
        <main>
          <Profile />
          <Clock /> 
        </main>
      </div>
    </ClockProvider>
  )
}

export default Home
