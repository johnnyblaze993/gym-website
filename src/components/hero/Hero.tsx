import styles from "./Hero.module.scss";
// import Card from "../card/Card";

//className={styles.}
const mobile = 576;

const Hero = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.maintitle}>Blaze Fitness</h1>
      <h2 className={styles.subtitle}>
        Feel the heat & burn through your goals!
      </h2>
      <p className={styles.text}>
        Whether you're looking to lose weight, build muscle, or simply improve
        your overall health and wellness, Blaze Fitness has everything you need
        to reach your full potential.
      </p>
      <button className={styles.button}>Bring the heat</button>
      <button className={styles.secondaryBtn}>More info</button>

      <div className={styles.imgBox}>
        <img
          src={
            window.innerWidth <= mobile
              ? "https://images.unsplash.com/photo-1560233026-ad254fa8da38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGV4ZXJjaXNlfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=600&q=60"
              : "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZXhlcmNpc2V8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          }
          alt="hero"
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default Hero;
