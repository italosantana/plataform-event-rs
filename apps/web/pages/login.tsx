import { Container } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { SignUpSection } from '../src/components/signUpSection/signupSection'
import { LoginSection } from '../src/components/LoginSection/LoginSection'

import styles from '../styles/Home.module.css'

const Login: NextPage = () => {
    return (
        <>
            <Head>
                <title>EventosTechBR | Login</title>
            </Head>
            <Container maxWidth="lg">
                <LoginSection />
            </Container>
        </>
    )
}

export default Login
