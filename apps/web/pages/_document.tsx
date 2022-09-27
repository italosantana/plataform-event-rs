import type { NextPage } from 'next'
import Document, { Html, Head, Main, NextScript } from 'next/document';
// import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'

class MyDocument extends Document {
    render() {
        return (
            <Html style={{ scrollBehavior: 'smooth' }} lang="en">
                <div>
                    <Head>
                        <meta name="description" content=" It's free! Create your events/meetups tech in our plataform." />
                        <link rel="icon" href="/favicon.ico" />
                        <link rel="preconnect" href="https://fonts.googleapis.com" />
                        <link rel="preconnect" href="https://fonts.gstatic.com" />
                        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
                    </Head>
                </div>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;