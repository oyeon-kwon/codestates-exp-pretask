import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// 컴포넌트 import
import Nav from '../components/nav';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>유어클래스 | 코드스테이츠 학습 플랫폼</title>
        <link rel="icon" href="/img/favicon.png" />
      </Head>
      
      <Nav />

      <main className={styles.main}>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
