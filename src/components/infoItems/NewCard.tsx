import styles from "./NewCard.module.scss";
import { CARD_INFO_DATA } from "../../ultils/cardInfoData";

const ItemCard = (item: CARD_INFO_DATA) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{<item.icon />}</div>
      <div className={styles.content}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.text}>{item.description}</p>
      </div>
      <button className={styles.button}>Read More</button>
    </div>
  );
};

export default ItemCard;
