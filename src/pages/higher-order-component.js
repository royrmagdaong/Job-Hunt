import Head from 'next/head'
import MyComponent from '@/components/MyComponent'
import { Inter } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })


export default function About() {
  return (
    <>
      <Head>
        <title>Job Hunt - About</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>   
        <MyComponent />
      </main>
    </>
  )
}