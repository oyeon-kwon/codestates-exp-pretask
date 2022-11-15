import styles from '../styles/Footer.module.css'
import Image from 'next/image';

// image import
import codestates_logo from '../public/img/codestates_logo.png';

function Footer() {
  return <div className={styles.footer}>
    <div className={styles.footer_left}>
        <Image src={codestates_logo} width={130} />
        <div className={styles.footer_left_desc}>
            <div>주식회사 코드스테이츠 | 사업자번호: 703-88-00878 | 대표자명: 김인기</div>
            <div>서울특별시 서초구 서초대로 396, 강남빌딩 20층(스파크플러스 강남 2호점)</div>
        </div>
        <div>
            <a className={styles.footer_link} href='https://codestates.com' target="_blank">홈페이지 |</a>
            <a className={styles.footer_link} href='https://codestates.com/terms/policy'>개인정보 처리방침 |</a>
            <a className={styles.footer_link} href='https://www.notion.so/9930956ea87443598cf25e4aa6091c72'>취소 및 환불 정책</a>
        </div>
    </div>
    <div className={styles.footer_right}>
        <div>구글 크롬에 최적화 되어있습니다</div>
    </div>
  </div>
}

export default Footer
