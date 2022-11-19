import styles from "../styles/Toktok.module.css";
import Image from "next/image";

// image import
import back from "../public/img/back.svg";
import closeBlack from "../public/img/close-black.svg";

function CheckInLog(props) {
  const { user, setShowCheckInLog, setIsModalOpen } = props;

  const backButtonHandler = () => {
    setShowCheckInLog(false);
  };

  const closeButtonHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.toktok_extended_modal}>
      <div className={styles.toktok_extended_modal_header}>
        <Image
          src={back}
          width={24}
          height={24}
          onClick={backButtonHandler}
          alt="back"
          className={styles.toktok_icon}
        />
        <div className={styles.toktok_extended_modal_title}>오늘 출결 내역</div>
        <Image
          src={closeBlack}
          width={24}
          height={24}
          onClick={closeButtonHandler}
          alt="close"
          className={styles.toktok_icon}
        />
      </div>
      <div className={styles.toktok_extended_modal_date}>
        {new Date().toLocaleString().slice(2, 12)}
      </div>

      <div className={styles.toktok_extended_modal_table_head_container}>
        <div className={styles.toktok_extended_modal_table_head}>분류</div>
        <div className={styles.toktok_extended_modal_table_head}>시간</div>
      </div>
      <div className={styles.toktok_border} />
      <table>
        <tbody className={styles.toktok_extended_modal_table_body}>
          {user.checkInLog.length !== 0 ? (
            user.checkInLog.map((checkInTime) => {
              return (
                <>
                  {checkInTime.checkInTime ? (
                    <tr className={styles.toktok_extended_modal_table_body_row}>
                      <td
                        className={
                          styles.toktok_extended_modal_table_body_row_child
                        }
                      >
                        입실
                      </td>
                      <td
                        className={
                          styles.toktok_extended_modal_table_body_row_child
                        }
                      >
                        {checkInTime.checkInTime.slice(14, 21)}
                      </td>
                    </tr>
                  ) : (
                    <tr className={styles.toktok_extended_modal_table_body_row}>
                      <td
                        className={
                          styles.toktok_extended_modal_table_body_row_child
                        }
                      >
                        퇴실
                      </td>
                      <td
                        className={
                          styles.toktok_extended_modal_table_body_row_child
                        }
                      >
                        {checkInTime.checkOutTime.slice(14, 21)}
                      </td>
                    </tr>
                  )}
                </>
              );
            })
          ) : (
            <div className={styles.toktok_extended_modal_body_text}>
              내역 없음
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CheckInLog;
