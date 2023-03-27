// import Aside from '@/components/Aside'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Chat IA</title>
      </Head>
      <div className='w-full relative bg-gptgray h-screen'>
        {/* <Aside /> */}
        {children}
      </div>
    </>
  )
}
