import { PencilOutline } from "react-ionicons";
import ProfilePicture from "../components/ProfilePicture";

import styles from "../styles/Account.module.scss";

export default function Account() {
  const onPressPencil = () => {
    console.error("clic");
  };

  return (
    <div className={styles.container}>
      <div>Account</div>
      <div className={styles["avatar-container"]}>
        <ProfilePicture />
        <div
          className={styles.pencil}
          onClick={onPressPencil}
          onKeyDown={onPressPencil}
          role="button"
          tabIndex="0"
        >
          <PencilOutline color="#00000" height="22px" width="25px" />
        </div>
      </div>
      <div className={styles.tabs}>
        <div className={styles.btnlink}>
          <div className={styles["btnlink-name"]}>Username</div>
          <input type="text" name="username" id="" value="username" />
        </div>
        <div className={styles.btnlink}>
          <div className={styles["btnlink-name"]}>Firstname</div>
          <p>email</p>
        </div>
        <div className={styles.btnlink}>
          <div className={styles["btnlink-name"]}>Lastname</div>
          <p>lastname</p>
        </div>
        <div className={styles.btnlink}>
          <div className={styles["btnlink-name"]}>Email</div>
          <p>email</p>
        </div>
        <div className={styles.btnlink}>
          <div className={styles["btnlink-name"]}>Password</div>
          <p>password</p>
        </div>
      </div>
    </div>
  );
}
