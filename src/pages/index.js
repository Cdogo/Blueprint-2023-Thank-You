import React, { useEffect, useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import ThankYouMessage from '@/components/ThankYouMessage'

import { messages } from '@/components/messages'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [message, setMessage] = useState('I have 2 word for the Blueprint organizers')

  useEffect(() => {
    const sleep = async (time) => {
      return setTimeout(time)
    }
    sleep(2000)
    console.log('works?')
  })
  return (
    <>
      <Head>
        <title>Thank You!</title>
        <meta name="description" content="A special message to the Blueprint 2023 organizers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className} flex justify-center items-center w-screen h-screen overflow-hidden`}>
        <h1 id={styles.message}></h1>
        <h2>Made with love by John Tan-Aristy</h2>
      </main>
      {messages && messages.map((msg) => {return(<ThankYouMessage {...msg}/>)})}
    </>
  )
}
//