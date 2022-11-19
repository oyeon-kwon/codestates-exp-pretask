import React, { useEffect, useState } from "react";
import styles from "../styles/CoursePage.module.css";

// axios function import
import { getJsonplaceholderPosts } from "../apiRequest/apiRequest";

function CoursePage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // 더미 포스트 요청
    getJsonplaceholderPosts().then((res) => setCourses(res.data.slice(0, 15)));
  }, []);

  return (
    <div className={styles.course_page_container}>
      <div className={styles.course_page_title}>수강 중인 코스</div>
      <div className={styles.course_page_box}>
        {courses.map((course) => {
          return (
            <div className={styles.course_page_content_box} key={course.id}>
              <div className={styles.course_page_content_image} />
              <div className={styles.course_page_content_title}>
                {course.title}
              </div>
              <div className={styles.course_page_content_desc}>
                {course.body}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CoursePage;
