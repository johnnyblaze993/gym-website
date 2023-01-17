import cardInfoData from "../../ultils/cardInfoData";
import styles from "./InfoItems.module.scss";
import { CARD_INFO_DATA } from "../../ultils/cardInfoData";
import NewCard from "./NewCard";
const InfoItems = () => {
  return (
    <div className={styles.container}>
      {cardInfoData.map((item: CARD_INFO_DATA) => {
        return (
          <NewCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        );
      })}
    </div>
  );
};

export default InfoItems;
