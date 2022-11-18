import { useState, useEffect } from 'react';
import styles from '../styles/MainPage.module.css'
import axios from 'axios'

function MainPage() {

    const [magazines, setMagizines] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => setMagizines(res.data))
    }, [])


  return <div className={styles.main_page_container}>
    <div className={styles.main_page_website_link_box}>
        <div className={styles.main_page_website_link_box_left}>
            <div className={styles.main_page_website_link_box_left_title}>코드스테이츠 웹사이트 바로가기</div>            
            <div className={styles.main_page_website_link_box_left_desc}>코드스테이츠와 함께 새로운 커리어를 시작하세요.</div>            
        </div>
        <div className={styles.main_page_website_link_box_right}>
            <div className={styles.main_page_website_link_box_right_text}>웹사이트 바로가기</div>
            <div className={styles.main_page_website_link_box_right_arrow}></div>
        </div>
    </div>
    <div>
        <div className={styles.main_page_contentList_title}>Magazine</div>
        <div className={styles.main_page_contentlist_box}>
        {
            magazines.map((magazine) => {
                return (
                    <div className={styles.main_page_content_box}>
                        <div className={styles.main_page_content_image} />
                        <div className={styles.main_page_content_title}>{magazine.title}</div>
                        <div className={styles.main_page_content_desc}>{magazine.body}</div>
                    </div>
                )
            })
        }
        </div>
    </div>
  </div>
}

export default MainPage
