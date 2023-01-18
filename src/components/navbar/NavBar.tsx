import { SportsGymnastics } from "@mui/icons-material";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <SportsGymnastics />
        </div>
        <div className={styles.links}>
          <button className={styles.link}>Our Plans</button>
          <button className={styles.link}>Bootcamps</button>
          <button className={styles.link}>Hours</button>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.signin}>Sign in</div>
        <button className={styles.register}>Become a member</button>
      </div>
      <select className={styles.select}>
        <option value="Our Plans">Our Plans</option>
        <option value="Bootcamps">Bootcamps</option>
        <option value="Hours">Hours</option>
        <option value="Sign in">Sign in</option>
        <option value="Become a member">Become a member</option>
      </select>
    </div>
  );
};

export default NavBar;
