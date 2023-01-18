import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.buisiness}>
        <h4 className={styles.title}>Blaze Fitness</h4>
        <p className={styles.text}>
          A cutting-edge fitness center that helps its members burn through
          their goals with a wide range of state-of-the-art equipment and expert
          trainers.
        </p>
        <p>Copyright © 2022 Blaze Fitness</p>
      </div>
      <div>
        <ul className={styles.links}>
          <h4>Links</h4>
          <li>
            <a className={styles.link} href="#">
              Fitness Tips
            </a>
          </li>
          <li>
            <a className={styles.link} href="#">
              Exercise Programs
            </a>
          </li>
          <li>
            <a className={styles.link} href="#">
              Nutrition Guides
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.contact}>
        <h4 className={styles.title}>Contact Us</h4>
        <p className={styles.text}>
          For more information, call us at 555-555-5555
        </p>
      </div>
    </footer>
  );
};

export default Footer;
