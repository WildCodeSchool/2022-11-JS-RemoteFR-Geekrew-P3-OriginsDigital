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
          1. Acceptation des conditions d'utilisation : Les utilisateurs doivent
          accepter les conditions d'utilisation avant de pouvoir accéder à la
          plateforme de vidéo. En utilisant la plateforme de vidéo, les
          utilisateurs acceptent les conditions d'utilisation. <br /> <br /> 2.
          Droits d'auteur et propriété intellectuelle : Tous les contenus de
          plateforme sont protégés par des droits d'auteur et des lois sur la
          propriété intellectuelle. Les utilisateurs ne peuvent pas utiliser le
          contenu de la plateforme de vidéo à des fins commerciales
          l'autorisation préalable des détenteurs de droits d'auteur. <br />
          <br /> 3. inappropriés Les utilisateurs ne doivent pas télécharger,
          publier ou partager du contenu inapproprié, diffamatoire,
          discriminatoire, offensant, illégal ou nuisible sur la plateforme de
          vidéo. <br />
          <br /> 4. Utilisation responsable : Les utilisateurs doivent utiliser
          utiliser la plateforme de vidéo de manière responsable et ne doivent
          pas utiliser la plateforme pour harceler, harceler, intimider ou nuire
          à d'autres utilisateurs. <br />
          <br /> 5. Confidentialité plateforme de vidéo des données personnelles
          sur les utilisateurs, et ces données sont protégées conformément aux
          applicables sur la confidentialité. Les utilisateurs doivent respecter
          la vie privée des autres utilisateurs et ne doivent pas divulguer les
          informations personnelles d'autres personnes sans leur autorisation.
          <br /> <br /> 6. Utilisation de cookies : La plateforme de vidéo
          utilise des cookies améliorer l'expérience utilisateur. Les
          utilisateurs doivent accepter l'utilisation de cookies pour utiliser
          la plateforme de vidéo. <br />
          <br /> 7. Responsabilité : La plateforme de vidéo n'assume aucune
          responsabilité pour les pertes causés par l'utilisation de la
          plateforme, sauf en cas de faute intentionnelle ou de négligence
          grave. <br />
          <br /> 8. Modification des conditions d'utilisation : La plateforme de
          vidéo se réserve le droit de modifier les conditions d'utilisation à
          tout moment. Les utilisateurs seront informés de ces modifications et
          devront accepter les nouvelles conditions d'utilisation pour continuer
          à utiliser la plateforme. <br />
          <br /> 9. Résiliation : La plateforme de vidéo se réserve le droit de
          l'accès des utilisateurs à la plateforme violation des conditions
          d'utilisation.
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
            className={`${styles.btnSubTerms} ${
              isChecked ? styles["btnSubTerms--checked"] : ""
            }`}
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
