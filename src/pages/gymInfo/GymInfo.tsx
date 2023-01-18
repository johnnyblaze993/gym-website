import InfoItems from "../../components/infoItems/InfoItems";
import styles from "./GymInfo.module.scss";

const GymInfo = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Our Gym</h1>
        <p className={styles.text}>
          Improve overall physical health through strength and cardiovascular
          training while gaining confidence in your body and mind.
        </p>
      </div>
      <InfoItems />
    </div>
  );
};

export default GymInfo;
