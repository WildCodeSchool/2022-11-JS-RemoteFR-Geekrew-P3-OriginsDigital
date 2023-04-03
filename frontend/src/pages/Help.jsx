import React from "react";

import styles from "../styles/Help.module.scss";

export default function Help() {
  return (
    <div className={styles["help-arrows"]}>
      <div className={styles["header-box"]}>
        <label className={styles["headbox-title"]} htmlFor="acc-close">
          Help Center
        </label>
      </div>
      <input type="radio" name="accordion" id="cb1" />
      <section className={styles.box}>
        <label className={styles["box-title"]} htmlFor="cb1">
          What is Origins Digital ?
        </label>
        <label className={styles["box-close"]} htmlFor="acc-close">
          {}
        </label>
        <div className={styles["box-content"]}>
          Origins Digital is a streaming platform that allows users to view
          videos with web development content. This platform offers different
          options available depending on the user's status.
        </div>
      </section>
      <input type="radio" name="accordion" id="cb2" />
      <section className={styles.box}>
        <label className={styles["box-title"]} htmlFor="cb2">
          How can I access all the videos in the library?
        </label>
        <label className={styles["box-close"]} htmlFor="acc-close">
          {}
        </label>
        <div className={styles["box-content"]}>
          To access the entire library, the user account must have Premium
          status. To access the Premium status, a subscription to the platform
          must be taken out via the user page.
        </div>
      </section>
      <input type="radio" name="accordion" id="cb3" />
      <section className={styles.box}>
        <label className={styles["box-title"]} htmlFor="cb3">
          Can I watch the videos on my mobile phone?
        </label>
        <label className={styles["box-close"]} htmlFor="acc-close">
          {}
        </label>
        <div className={styles["box-content"]}>
          The platform has been designed with the use of all types of screens in
          mind. So you can watch your videos on your phone as well as on your
          tablet or computer.
        </div>
      </section>
      <input type="radio" name="accordion" id="cb4" />
      <section className={styles.box}>
        <label className={styles["box-title"]} htmlFor="cb4">
          How can I change my username / avatar / email address / password?
        </label>
        <label className={styles["box-close"]} htmlFor="acc-close">
          {}
        </label>
        <div className={styles["box-content"]}>
          To change your nickname, your avatar, your email address or your
          password, go to your user space by clicking on your avatar, then on
          "account".
        </div>
      </section>
      <input type="radio" name="accordion" id="cb5" />
      <section className={styles.box}>
        <label className={styles["box-title"]} htmlFor="cb5">
          How can I subscribe / unsubscribe?
        </label>
        <label className={styles["box-close"]} htmlFor="acc-close">
          {}
        </label>
        <div className={styles["box-content"]}>
          To manage your subscription, go to your user page by clicking on your
          avatar, then on "subscribe".
        </div>
      </section>
      <input type="radio" name="accordion" id="cb6" />
      <section className={styles.box}>
        <label className={styles["box-title"]} htmlFor="cb6">
          How do I delete my account?
        </label>
        <label className={styles["box-close"]} htmlFor="acc-close">
          {}
        </label>
        <div className={styles["box-content"]}>
          To delete your account from the Origins Digital platform, go to your
          user page by clicking on your avatar, then in "account", select the
          "delete" button.
        </div>
      </section>
      <input type="radio" name="accordion" id="cb7" />
      <section className={styles.box}>
        <label className={styles["box-title"]} htmlFor="cb7">
          I can't find an answer, how can I contact you?
        </label>
        <label className={styles["box-close"]} htmlFor="acc-close">
          {}
        </label>
        <div className={styles["box-content"]}>
          If you have not found your answer, please send your request for help
          to the following address helpcenter@originsdigital.com
        </div>
      </section>
      <input type="radio" name="accordion" id="acc-close" />
    </div>
  );
}
