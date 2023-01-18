import styles from "./Classes.module.scss";

const Classes = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Blaze Bootcamps</h1>
        <p className={styles.text}>
          Blaze Fitness offers a wide variety of classes that cater to all
          fitness levels and goals. Whether you're looking to lose weight, build
          muscle, or simply improve your overall health and wellness, our expert
          trainers will guide you every step of the way. Our classes are
          designed to be challenging and fun, which keeps our members motivated
          and engaged. With a variety of classes to choose from, including
          cardio, strength training, yoga and Pilates, Blaze Fitness has
          something for everyone.
        </p>
      </div>
      <div className={styles.imgBox}>
        <img
          className={styles.img}
          src="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zml0bmVzcyUyMGJvb3RjYW1wfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=700&q=60"
          alt="goals"
        />
        <img
          className={styles.img}
          src="https://images.unsplash.com/photo-1550101733-1301db7ba32a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d29ya291dHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=700&q=60"
          alt="goals"
        />
        <img
          className={styles.img}
          src="https://images.unsplash.com/photo-1609601241542-f0a4f70b531a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fGZpdG5lc3MlMjBib290Y2FtcHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=700&q=60"
          alt="goals"
        />
      </div>
    </div>
  );
};

export default Classes;
