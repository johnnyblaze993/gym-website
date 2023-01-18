import React from "react";
import styles from "./Join.module.scss";

const Join = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          {" "}
          <span>Join today</span>, Blaze your goals
        </h1>
        <p className={styles.text}>
          Join Blaze Fitness now and experience the state-of-the-art equipment
          and expert trainers that will help you reach your fitness goals. Our
          supportive community and commitment to your success make Blaze Fitness
          the perfect place to ignite your passion for fitness. Sign up now and
          take the first step towards reaching your full potential.
        </p>
      </div>
      <form className={styles.form}>
        <input className={styles.input} type="text" placeholder="Name" />
        <input className={styles.input} type="text" placeholder="Email" />
        <input className={styles.input} type="text" placeholder="Phone" />
        <button className={styles.button}>Submit</button>
      </form>

      <div className={styles.imgBox}>
        <img
          className={styles.img}
          src="https://images.unsplash.com/photo-1600026453256-9fe8ca59d5d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGZpdG5lc3N8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60"
          alt="join"
        />
      </div>
    </div>
  );
};

export default Join;
