import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main>
        <h1 className="text-purple-500 text-xl">hello world</h1>
      </main>
    </>
  )
}
