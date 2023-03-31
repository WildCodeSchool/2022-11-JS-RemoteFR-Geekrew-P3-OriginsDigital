import { NavLink, useNavigate } from "react-router-dom";
import instanceAxios from "../services/instanceAxios";
import styles from "../styles/Admin.module.scss";
import { useSignInContext } from "../contexts/SignInContext";

function Admin() {
  const { setUser } = useSignInContext();
  const navigate = useNavigate();
  const handleDisconnection = () => {
    instanceAxios
      .get(`/log-out`)
      .then(() => {
        localStorage.clear();
        setUser(null);
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className={styles["admin-profile"]}>
      <div className={styles.tabs}>
        <div className={styles.btnlink}>
          <NavLink to="/add-video" className={styles["btn-admin"]}>
            Add Video
          </NavLink>
        </div>
        <div className={styles.btnlink}>
          <NavLink to="/manage-video" className={styles["btn-admin"]}>
            Manage Video
          </NavLink>
        </div>
        <div className={styles.btnlink}>
          <NavLink to="/manage-categories" className={styles["btn-admin"]}>
            Manage Categories
          </NavLink>
        </div>
        <div className={styles.btnlink}>
          <NavLink to="/add-pages" className={styles["btn-admin"]}>
            Add Pages
          </NavLink>
        </div>
        <div className={styles.btnlink}>
          <NavLink
            onClick={handleDisconnection}
            to="/"
            className={styles["btn-admin"]}
          >
            Logout
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Admin;
