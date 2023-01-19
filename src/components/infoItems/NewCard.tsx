import styles from "./NewCard.module.scss";
import { CARD_INFO_DATA } from "../../ultils/cardInfoData";
import { Link, animateScroll as scroll } from "react-scroll";

const ItemCard = (item: CARD_INFO_DATA) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{<item.icon />}</div>
      <div className={styles.content}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.text}>{item.description}</p>
      </div>
      <Link
        className={styles.button}
        activeClass="active"
        to="join"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
      >
        Read More
      </Link>
    </div>
  );
};

export default ItemCard;
