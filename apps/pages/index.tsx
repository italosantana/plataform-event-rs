import { Container } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { LoginSection } from '../src/components/LoginSection/LoginSection'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>LearningRelay | Login</title>
      </Head>
      <Container maxWidth="lg">
        <LoginSection />
      </Container>
    </>
  )
}

export default Home
