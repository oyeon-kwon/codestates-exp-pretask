import React, { useEffect, useState } from 'react';
import styles from '../styles/Toast.module.css'
import Image from 'next/image'

// image import
import check from '../public/img/check.svg'
import close from '../public/img/close.svg';

function Toast({ setIsToastOpen }) {

  const closeToastHandler = (e) => {
    e.stopPropagation();
    setIsToastOpen(false)
  }

  return <div className={styles.toast_container}>
        <Image src={check} width={18} height={18} />
        <div>입실 상태로 변경되었습니다.</div>
        <Image className={styles.toast_close_button} src={close} width={16} height={16} onClick={closeToastHandler} />
    </div>
}

export default Toast
