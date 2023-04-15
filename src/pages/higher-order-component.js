import Head from 'next/head'
import MyComponent from '@/components/HOC/MyComponent'


export default function About() {
  return (
    <>
      <Head>
        <title>Job Hunt</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>   
        <MyComponent />
      </main>
    </>
  )
}
