import { SportsGymnastics } from "@mui/icons-material";
import styles from "./NavBar.module.scss";
import { Link, animateScroll as scroll } from "react-scroll";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logo} onClick={() => scroll.scrollToTop()}>
          <SportsGymnastics />
        </div>
        <div className={styles.links}>
          <Link
            className={styles.link}
            activeClass="active"
            to="info"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Info
          </Link>
          <Link
            className={styles.link}
            activeClass="active"
            to="goals"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Goals
          </Link>
          <Link
            className={styles.link}
            activeClass="active"
            to="classes"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Bootcamps
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <div>Sign in</div>
        <Link
          className={styles.register}
          activeClass="active"
          to="join"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          Become a member
        </Link>
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
