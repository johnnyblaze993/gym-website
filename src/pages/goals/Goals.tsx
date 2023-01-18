import styles from "./Goals.module.scss";

const Goals = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgBox}>
        <img
          className={styles.img}
          src="https://images.unsplash.com/photo-1485727749690-d091e8284ef3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="goals"
        />
      </div>
      <div className={styles.content} id="goals">
        <h1 className={styles.title}>
          Reach your <span>goals</span> !
        </h1>
        <p className={styles.text}>
          Blaze Fitness is loved by its members for many reasons. Firstly, our
          state-of-the-art equipment is constantly updated to ensure that our
          members have access to the latest and most effective tools for
          reaching their fitness goals. Additionally, our expert trainers are
          not only knowledgeable and experienced, but also dedicated to helping
          each member reach their full potential. They create personalized
          workout plans and provide ongoing support and encouragement.
          <br />
          Another reason why our members love Blaze Fitness is our training
          sessions. Our sessions are designed to be challenging and fun, which
          keeps our members motivated and engaged. The variety of classes we
          offer, from cardio and strength training to yoga and Pilates, ensures
          that there is something for everyone. Our trainers create a positive
          and inclusive environment that encourages members to push their limits
          and achieve their goals. Our members also appreciate the community
          spirit at Blaze Fitness, where they can make friends and workout
          together.
        </p>
      </div>
      <button className={styles.button}>Get Started</button>
    </div>
  );
};

export default Goals;
