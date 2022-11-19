import styles from '../styles/Nav.module.css'
import urclass from '../public/img/urclass.png'
import Image from 'next/image';
import Link from 'next/link';

function Nav({ user }) {
  return <div className={styles.nav}>
    <div className={styles.nav_leftside}>
      <Link href='/'>
        <Image src={urclass} width={127} height={127} alt='logo' />
      </Link>
    </div>
    <div className={styles.nav_rightside}>
      {
        user.loginStatus ?
        <>
        <Link href='/coursepage'>
          <div className={styles.nav_link}>수강 중인 코스</div>
        </Link>
        <Link href='/mypage'>
          <div className={styles.nav_mypage_icon}></div>
        </Link>
        </>
        :
        <>
          <div className={styles.nav_login}>로그인</div>
        </>
      }
    </div>
  </div>
}

export default Nav
