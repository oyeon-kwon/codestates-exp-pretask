import { useState, useEffect } from "react";
import "../styles/globals.css";
import styles from "../styles/Home.module.css";

// 컴포넌트 import
import Nav from "../components/nav";
import Toktok from "../components/toktok";
import Toast from "../components/toast";
import Footer from "../components/footer";

// axios function import
import {
  requestGetUserData,
  requestCheckIn,
  requestCheckOut,
  requestGetCheckInLog,
} from "../apiRequest/apiRequest";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({});

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isToastOpen, setIsToastOpen] = useState(false);

  useEffect(() => {
    requestGetUserData().then((res) => setUser(res.data));
  }, []);

  useEffect(() => {
    if (isToastOpen) {
      setTimeout(() => setIsToastOpen(false), 2700);
    }
  }, [isToastOpen]);

  const requestCheckInStatusHandler = () => {
    if (!user.checkInStatus) {
      // 입실 요청
      requestCheckIn(true, new Date().toLocaleString())
        .then((res) => {
          setUser(res.data);
          setIsToastOpen(true);
        })
        .catch((err) => alert("입실 요청에 오류가 발생했습니다."));
    } else {
      // 퇴실 요청
      requestCheckOut(false, new Date().toLocaleString())
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => alert("퇴실 요청에 오류가 발생했습니다."));
    }
  };

  const getCheckInLog = () => {
    // 출결 내역 요청
    requestGetCheckInLog().then((res) => setUser(res.data));
  };

  return (
    <div className={styles.container} onClick={() => setIsModalOpen(false)}>
      <Nav user={user} />
      <Component {...pageProps} />
      <main className={styles.main}>
        {isToastOpen ? <Toast setIsToastOpen={setIsToastOpen} /> : null}
        <Toktok
          user={user}
          requestCheckInStatusHandler={requestCheckInStatusHandler}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          getCheckInLog={getCheckInLog}
        />
      </main>

      <Footer />
    </div>
  );
}

export default MyApp;
