import { Container } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { SignUpSection } from '../src/components/signUpSection/signupSection'

import styles from '../styles/Home.module.css'

const Signup: NextPage = () => {
    return (
        <>
            <Head>
                <title>EventosTechBR | Signup</title>
            </Head>
            <Container maxWidth="lg">
                <SignUpSection />
            </Container>
        </>
    )
}

export default Signup
