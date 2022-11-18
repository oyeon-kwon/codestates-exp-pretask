import styles from '../styles/Nav.module.css'
import Logo from '../public/img/favicon.png'
import Image from 'next/image';
import Link from 'next/link';

function Nav({ user }) {
  return <div className={styles.nav}>
    <div className={styles.nav_leftside}>
      <Link href='/'>
        <Image src={Logo} width={80} height={80} alt='logo' />
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
          <div className={styles.nav_link}>마이페이지</div>
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
