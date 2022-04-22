import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { Clock } from '../components/Clock'
import { ExperienceBar } from '../components/ExperienceBar'
import { OptionsButton } from '../components/OptionsButton'
import { Profile } from '../components/Profile'
import { ContextProvider } from '../context/ContextProvider'
import { OptionsContext } from '../context/OptionsContext'
import styles from '../styles/Home.module.sass'

const Home: NextPage = () => {
  const router = useRouter()
  const { isDarkMode } = useContext(OptionsContext)
  
  useEffect(() => {
    document.body.dataset.theme = isDarkMode ? 'dark' : 'light'
  }, [isDarkMode])

  return (
        <div className={styles.container}>
          <ExperienceBar />
          <main>
            <section className={styles.infoContainer}>
              <Profile />
              <OptionsButton />
            </section>
            <section className={styles.clockContainer}>
              <Clock /> 
            </section>
          </main>
        </div>
  )
}

export default Home
