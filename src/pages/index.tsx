import type { NextPage } from 'next'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import styles from '../styles/Home.module.sass'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <ExperienceBar />
      <main>
        <Profile />
      </main>
    </div>
  )
}

export default Home
