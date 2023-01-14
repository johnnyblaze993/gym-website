import React from "react";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div>logo</div>
        <div className={styles.links}>
          <div>Home</div>
          <div>Our Plans</div>
          <div>Bootcamps</div>
          <div>Hours</div>
        </div>
      </div>
      <div className={styles.right}>
        <div>Sign in</div>
        <div>Become a member</div>
      </div>
    </div>
  );
};

export default NavBar;
