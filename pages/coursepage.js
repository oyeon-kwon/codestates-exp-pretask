import React, { useEffect, useState } from 'react';
import styles from '../styles/CoursePage.module.css';
import axios from 'axios';

function CoursePage() {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => setCourses(res.data))
    }, [])



  return <div className={styles.course_page_container}>
    {
        courses.map((course) => {
            return (
                <div className={styles.course_page_content_box}>
                    <div className={styles.course_page_content_image} />
                    <div className={styles.course_page_content_title}>{course.title}</div>
                    <div className={styles.course_page_content_desc}>{course.body}</div>
                </div>
            )
        })
    }
    </div>
}

export default CoursePage
