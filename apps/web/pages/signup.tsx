import { Container } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import { SignUpSection } from '../src/components/signUpSection/signupSection'


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
