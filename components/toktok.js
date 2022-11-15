import React, { useState } from 'react';
import styles from '../styles/Toktok.module.css'
import Image from 'next/image'

// 컴포넌트 import
import ToktokModal from './toktokModal';

// image import
import defaultIcon from '../public/img/default-icon.svg'
import look from '../public/img/look.svg'
import sleep from '../public/img/sleep.svg'


function Toktok({ user }) {
  
    const { name, loginStatus, checkInStatus, date, content } = user
    const [ isToktokClicked, setIsToktokClicked ] = useState(false)
    const [ isModalOpen, setIsModalOpen ] = useState(false)
    const [ checkIn, setIsCheckIn ] = useState(checkInStatus)
    

    const toktokClickHandler = () => {
        setIsToktokClicked(!isToktokClicked)
        setIsModalOpen(!isModalOpen)

        if(checkIn) {
            setIsCheckIn(!checkIn)
            // TODO: checkin status 정보 서버로 보내기
        }
        // TODO json server 하고 나서 optimistic 그거 안해도 되는지 체크하기
    }

  return <div className={styles.toktok_container}>
    {
        isModalOpen ? <ToktokModal checkIn={checkIn} setIsCheckIn={setIsCheckIn} name={name} /> : null
    }
    <div className={styles.toktok}>
    {
        checkIn && isToktokClicked ?
        <Image src={look} width={100} height={100} onClick={toktokClickHandler} alt='icon'/>:
        checkIn ?
            <Image src={defaultIcon} width={100} height={100} onClick={toktokClickHandler} alt='icon'/>
            :
            <Image src={sleep} width={100} height={100} onClick={toktokClickHandler} alt='icon'/>
    }
    </div>
    </div>
}

export default Toktok
