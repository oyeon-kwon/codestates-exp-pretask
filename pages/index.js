import { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios'

// 컴포넌트 import
import Nav from '../components/nav';
import Toktok from '../components/toktok';

export default function Home() {

  const [user, setUser] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  useEffect(() => {
    axios.get('http://localhost:3000/api/checkin').then((res) => setUser(res.data))
  }, [])

  const requestCheckInStatusHandler = () => {
    if(!user.checkInStatus) {
      // 입실 axios 요청
      axios.post('http://localhost:3000/api/checkin', {
          checkInStatus: true
      }).then((res) => {
          setUser(res.data)
      })
    } 
    else {
      // 퇴실 axios 요청
      axios.post('http://localhost:3000/api/checkin', {
          checkInStatus: false
      }).then((res) => {
          setUser(res.data)
      })
    }
  }

  return (
    <div className={styles.container} onClick={() => setIsModalOpen(!isModalOpen)}>
      <Head>
        <title>유어클래스 | 코드스테이츠 학습 플랫폼</title>
        <link rel="icon" href="/img/favicon.png" />
      </Head>
      
      <Nav />

      <main className={styles.main}>
        <Toktok user={user} requestCheckInStatusHandler={requestCheckInStatusHandler} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
