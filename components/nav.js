import styles from '../styles/Nav.module.css'
import Logo from '../public/img/favicon.png'
import Image from 'next/image';

function Nav() {
  return <div className={styles.nav}>
    <div className={styles.nav_leftside}>
        <Image src={Logo} width={80} height={80} alt='logo' />
    </div>
    <div className={styles.nav_rightside}>
        <div className={styles.nav_link}>수강 중인 코스</div>
        <div className={styles.nav_link}>코플릿</div>
        <div className={styles.nav_link}>Jobs</div>
    </div>
  </div>
}

export default Nav
