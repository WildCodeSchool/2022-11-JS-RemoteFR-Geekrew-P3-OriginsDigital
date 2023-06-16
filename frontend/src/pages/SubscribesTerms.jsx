import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/SubscribesTerms.module.scss";

function SubscribesTerms() {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleContinueClick = () => {
    if (isChecked) {
      navigate("/payments");
    }
  };

  return (
    <div className={styles.contTerms}>
      <h1 className={styles.titleTerms}>Premium</h1>
      <div className={styles.divTextTerms}>
        <p className={styles.textTerms}>
          1.Acceptance of Terms of Use: Users must accept the terms of use
          before you can access the video platform. By using the video platform,
          users accept the terms of use.
          <br /> <br /> 2. Copyright and Intellectual Property: All the platform
          contents are protected by copyright and intellectual property laws.
          Users cannot not use the content of the video platform for purposes
          the prior authorization of the rights holders author.
          <br />
          <br /> 3.Users should not download, post or share inappropriate,
          defamatory, discriminatory, offensive, illegal or harmful on the
          platform of video.
          <br />
          <br /> 4. Responsible Use: Users should use use the video platform
          responsibly and must not not use the platform to harass, harass,
          intimidate or harm to other users. <br />
          <br /> 5. Privacy personal data video platform about users, and this
          data is protected in accordance with the applicable to
          confidentiality. Users must respect the privacy of other users and
          must not disclose the other people's personal information without
          their permission.
          <br /> <br /> 6.Use of cookies: The video platform uses cookies to
          improve the user experience. THE users must accept the use of cookies
          to use the video platform.
          <br />
          <br /> 7. Liability: The video platform assumes no liability for
          losses caused by the use of the platform, except in cases of willful
          misconduct or negligence severe.
          <br />
          <br /> 8. Modification of the conditions of use: The platform of video
          reserves the right to modify the conditions of use at any time. Users
          will be informed of these changes and will need to accept the new
          terms of use to continue to use the platform.
          <br />
          <br /> 9. Termination: The video platform reserves the right to user
          access to the platform breach of terms of use.
        </p>
      </div>
      <div className={styles.checkbox}>
        <div className={styles.divCheck}>
          <input
            className={styles.checkAgree}
            type="checkbox"
            name="I Agree of conditions"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </div>
        <div className={styles.divBoxBtn}>
          <button
            className={styles.btnSubTerms}
            type="button"
            disabled={!isChecked}
            onClick={handleContinueClick}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubscribesTerms;
