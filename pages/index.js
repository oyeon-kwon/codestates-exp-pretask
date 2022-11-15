import { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios'

// 컴포넌트 import
import Nav from '../components/nav';
import Toktok from '../components/toktok';
import Toast from '../components/toast';

export default function Home() {

  const [user, setUser] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isToastOpen, setIsToastOpen] = useState(false)
  
  useEffect(() => {
    axios.get('http://localhost:3000/api/checkin').then((res) => setUser(res.data))
  }, [])

  useEffect(() => {
    if(isToastOpen) {
      setTimeout(() => setIsToastOpen(false), 2700);
    }
  }, [isToastOpen])

  const requestCheckInStatusHandler = () => {
    if(!user.checkInStatus) {
      // 입실 axios 요청
      axios.post('http://localhost:3000/api/checkin', {
          checkInStatus: true
      }).then((res) => {
          setUser(res.data)
          setIsToastOpen(true)
      }).catch((err) => alert('입실 요청에 오류가 발생했습니다.'))
    } 
    else {
      // 퇴실 axios 요청
      axios.post('http://localhost:3000/api/checkin', {
          checkInStatus: false
      }).then((res) => {
          setUser(res.data)
      }).catch((err) => alert('퇴실 요청에 오류가 발생했습니다.'))
    }
  }

  return (
    <div className={styles.container} onClick={() => setIsModalOpen(false)}>
      <Head>
        <title>유어클래스 | 코드스테이츠 학습 플랫폼</title>
        <link rel="icon" href="/img/favicon.png" />
      </Head>
      
      <Nav user={user} />

      <main className={styles.main}>
        {
          isToastOpen ? <Toast setIsToastOpen={setIsToastOpen} /> : null
        }
        <Toktok user={user} requestCheckInStatusHandler={requestCheckInStatusHandler} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
