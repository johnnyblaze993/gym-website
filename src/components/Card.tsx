import styles from "./Card.module.scss";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }: CardProps) => {
  const classes =
    styles.card + (children ? " " + styles["card--with-children"] : "");

  return <div className={classes}>{children}</div>;
};

export default Card;
