import React, { useEffect, useState } from 'react';
import styles from '../styles/Toktok.module.css'
import Image from 'next/image'

// 컴포넌트 import
import ToktokModal from './toktokModal';

// image import
import defaultIcon from '../public/img/default-icon.svg'
import look from '../public/img/look.svg'
import sleep from '../public/img/sleep.svg'

function Toktok({ user, requestCheckInStatusHandler }) {
  
    const [isToktokClicked, setIsToktokClicked] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const toktokClickHandler = () => {
        setIsToktokClicked(!isToktokClicked)
        setIsModalOpen(!isModalOpen)
    }

  return <div className={styles.toktok_container}>
    {
        isModalOpen ? <ToktokModal user={user} requestCheckInStatusHandler={requestCheckInStatusHandler} /> : null
    }
    <div className={styles.toktok}>
    {
        user.checkInStatus && isToktokClicked ?
        <Image src={look} width={100} height={100} onClick={toktokClickHandler} alt='icon'/>:
        user.checkInStatus ?
            <Image src={defaultIcon} width={100} height={100} onClick={toktokClickHandler} alt='icon'/>
            :
            <Image src={sleep} width={100} height={100} onClick={toktokClickHandler} alt='icon'/>
    }
    </div>
    </div>
}

export default Toktok
