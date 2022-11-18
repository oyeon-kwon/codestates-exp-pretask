import React, { useEffect, useState } from 'react';
import styles from '../styles/CoursePage.module.css'

import courses from './api/data/courses';
// todo: 위의 데이터 받아오는거 axios로 변경해야해

function CoursePage() {


  return <div className={styles.course_page_container}>
    {
        courses.map((course) => {
            return (
                <div className={styles.course_page_content_box}>
                    <div className={styles.course_page_content_image} alt='courseimg'/>
                    <div className={styles.course_page_content_title}>{course.title}</div>
                    <div className={styles.course_page_content_desc}>{course.desc}</div>
                </div>
            )
        })
    }

    </div>
}

export default CoursePage
