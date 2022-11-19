import React, { useEffect, useState } from "react";
import styles from "../styles/Mypage.module.css";
import Image from "next/image";

// image import
import oyeon from "../public/img/oyeon.png";
import blog from "../public/img/blog.svg";
import github from "../public/img/github.svg";
import mail from "../public/img/mail.svg";

import portfolio from "./api/data/portfolio";

function Mypage() {
  return (
    <div className={styles.mypage_container}>
      <div className={styles.mypage_introduce_box}>
        <div className={styles.mypage_introduce_image_box}>
          <Image src={oyeon} width={250} height={250} />
          <div className={styles.mypage_introduce_icon_box}>
            <a href="https://github.com/oyeon-kwon" target="_blank">
              <Image
                src={github}
                width={30}
                height={30}
                className={styles.mypage_introduce_icon}
              />
            </a>
            <a href="mailto:rnjsdhdus93@gmail.com">
              <Image
                src={mail}
                width={30}
                height={30}
                className={styles.mypage_introduce_icon}
              />
            </a>
            <a href="https://o-yeon.tistory.com/" target="_blank">
              <Image
                src={blog}
                width={30}
                height={30}
                className={styles.mypage_introduce_icon}
              />
            </a>
          </div>
        </div>
        <div className={styles.mypage_introduce_desc_box}>
          <div className={styles.mypage_introduce_desc}>
            반갑습니다. <b>웹 프론트엔드 개발자 권오연</b>입니다.
          </div>
          <div className={styles.mypage_introduce_desc}>
            코드스테이츠에서 3년차 <b>교육 개발자</b>로 일하며 <br />
            프론트엔드 기본, 심화 과정 실시간 강의와 콘텐츠 제작을 담당했습니다.
          </div>
          <div className={styles.mypage_introduce_desc}>
            <b>React와 Redux</b>를 이용한 프론트엔드 개발이 가능합니다.
          </div>
          <div className={styles.mypage_introduce_desc}>
            <b>UIUX 디자인</b>에 관심이 많아 자주 이용하는 서비스들의 UIUX에
            항상 의문을 가지고 고민합니다. <br /> 디자인의 중요성에 공감하며 GTQ
            Photoshop 1급 자격증을 보유하고 있습니다.
          </div>
        </div>
      </div>

      <div className={styles.mypage_portfolio_box}>
        <div className={styles.mypage_portfolio_title}>Portfolio</div>
        <div className={styles.mypage_portfolio_contentlist_box}>
          {portfolio.map((project) => {
            return (
              <>
                <a
                  className={styles.mypage_portfolio_content_box}
                  href={project.link}
                  target="_blank"
                >
                  <Image
                    className={styles.mypage_portfolio_content_image}
                    src={project.image}
                    width={100}
                    height={70}
                  />
                  <div className={styles.mypage_portfolio_content_title}>
                    {project.title}
                  </div>
                  <div className={styles.mypage_portfolio_content_desc}>
                    {project.desc}
                  </div>
                </a>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Mypage;
