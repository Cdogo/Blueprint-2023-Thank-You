import React, { useEffect, useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import ThankYouMessage from '@/components/ThankYouMessage'
import ThankYouMessage1 from '@/components/Message'

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
        <meta name="description" content="A special message to the Blueprint 2023 organizers. P.S. Please watch on a laptop :)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className} grid grid-rows-2 justify-center items-center w-screen h-screen overflow-hidden`}>
        <div className = 'flex flex-col h-full justify-end'>
          <h1 id={styles.message}></h1>
          <h2 id={styles.credit}>
            Made with {'<'}3 by John Tan-Aristy
          </h2>
        </div>
        <div className = {`${styles.allmessages} w-fit flex justify-center items-center p-3 flex-wrap h-[50vh] max-w-screen-xl m-auto overflow-auto gap-3`}>
          {messages && messages.map((msg) => {return(<ThankYouMessage1 {...msg}/>)})}
        </div>
      </main>
      {messages && messages.map((msg) => {return(<ThankYouMessage {...msg}/>)})}
    </>
  )
}
//