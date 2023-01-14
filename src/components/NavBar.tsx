import React from "react";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div>logo</div>
        <div className={styles.links}>
          <button className={styles.link}>Home</button>
          <button className={styles.link}>Our Plans</button>
          <button className={styles.link}>Bootcamps</button>
          <button className={styles.link}>Hours</button>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.signin}>Sign in</div>
        <button className={styles.register}>Become a member</button>
      </div>
    </div>
  );
};

export default NavBar;
