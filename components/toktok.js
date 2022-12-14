import React, { useEffect, useState } from "react";
import styles from "../styles/Toktok.module.css";
import Image from "next/image";

// 컴포넌트 import
import ToktokModal from "./toktokModal";

// image import
import defaultIcon from "../public/img/default-icon.svg";
import look from "../public/img/look.svg";
import sleep from "../public/img/sleep.svg";

function Toktok(props) {
  const {
    user,
    requestCheckInStatusHandler,
    isModalOpen,
    setIsModalOpen,
    getCheckInLog,
  } = props;

  const toktokClickHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div
      className={styles.toktok_container}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {isModalOpen ? (
        <ToktokModal
          user={user}
          requestCheckInStatusHandler={requestCheckInStatusHandler}
          getCheckInLog={getCheckInLog}
          setIsModalOpen={setIsModalOpen}
        />
      ) : null}
      <div className={styles.toktok}>
        {user.checkInStatus && isModalOpen ? (
          <Image
            src={look}
            width={100}
            height={100}
            onClick={toktokClickHandler}
            alt="icon1"
          />
        ) : user.checkInStatus ? (
          <Image
            src={defaultIcon}
            width={100}
            height={100}
            onClick={toktokClickHandler}
            alt="icon2"
          />
        ) : (
          <Image
            src={sleep}
            width={100}
            height={100}
            onClick={toktokClickHandler}
            alt="icon3"
          />
        )}
      </div>
    </div>
  );
}

export default Toktok;
