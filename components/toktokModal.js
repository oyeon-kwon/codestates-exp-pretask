import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/Toktok.module.css'
import Image from 'next/image'

// 컴포넌트 import
import CheckInLog from './checkInLog';

// image import
import balloon from '../public/img/balloon.svg'

function ToktokModal({ user, requestCheckInStatusHandler, getCheckInLog, setIsModalOpen }) {

    const [showCheckoutConfirm, setShowCheckoutConfirm] = useState(false)
    const [showCheckInLog, setShowCheckInLog] = useState(false)

    const checkInStatusHandler = () => {
        if(user.checkInStatus) {
            setShowCheckoutConfirm(true)
        } else {
            // 입실 axios 요청
            requestCheckInStatusHandler()
        }
    }

    const checkOutStatusHandler = () => {
        setShowCheckoutConfirm(false)
        // 퇴실 axios 요청
        requestCheckInStatusHandler()
    }

    const showGetCheckInLogHanlder = () => {
        setShowCheckInLog(true)
        getCheckInLog()
    }

  return <div className={styles.toktok_modal_container}> 
  {
    showCheckInLog ? 
        <CheckInLog user={user} setShowCheckInLog={setShowCheckInLog} setIsModalOpen={setIsModalOpen} />
        :
        <>
        <Image className={styles.toktok_modal_img} src={balloon} width={350} height={300} alt='balloon' />
        <div className={styles.toktok_content}> 
            {
                showCheckoutConfirm ? 
                <>
                    <div className={styles.toktok_content_head}>정말 퇴실하실건가요?</div>
                    <div className={styles.toktok_content_body}>퇴실하면 더 이상{<br />}학습시간이 기록되지 않아요.</div>
                    <button className={styles.toktok_content_button} onClick={checkOutStatusHandler}>네, 퇴실합니다 😊</button>
                </>
                : user.checkInStatus ? 
                <>
                    <div>{user.name}님 안녕하세요! {<br />} 입실 상태입니다.</div>
                    <div className={styles.toktok_toggle} onClick={checkInStatusHandler}>
                        <div className={styles.toktok_toggle_button_on} />
                        <div className={styles.toktok_toggle_on_text}>째깍이 재워 퇴실</div>
                    </div>
                </>
                : 
                <>
                    <div>{user.name}님 안녕하세요! {<br />} 퇴실 상태입니다. 입실해주세요.</div>
                    <div className={styles.toktok_toggle} onClick={checkInStatusHandler}>
                        <div className={styles.toktok_toggle_button_off} />
                        <div className={styles.toktok_toggle_off_text}>째깍이 깨워 입실</div>
                    </div>
                </>
            }
            <div className={styles.toktok_showcheckInLog_button} onClick={showGetCheckInLogHanlder}>오늘 출결 내역 보기</div>
        </div> 
        </>
  }
    </div>
}

export default ToktokModal
