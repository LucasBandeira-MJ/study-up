import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { Clock } from '../components/Clock'
import { ExperienceBar } from '../components/ExperienceBar'
import { FullPageLoader } from '../components/FullPageLoader'
import { OptionsButton } from '../components/OptionsButton'
import { Profile } from '../components/Profile'
import { OptionsContext } from '../context/OptionsContext'
import styles from '../styles/Home.module.sass'

const Home: NextPage = () => {
  const router = useRouter()
  const { isDarkMode } = useContext(OptionsContext)

  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/login')
    },
  })

  // useEffect(() => {
  //   document.body.dataset.theme = isDarkMode ? 'dark' : 'light'
  // }, [isDarkMode])

  if (status === "loading") {
    return <FullPageLoader />
  }

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
