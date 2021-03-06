import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Main } from '../components/main'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Todo App</title>
        <meta name="Todo" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </div>
  )
}

export default Home
