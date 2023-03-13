import styles from "../styles/CreditCard.module.css";
import chip from "../icons/chip.png"; // with import

const CreditCard = () => {
  return (
    <div className={styles["credit-card"]}>
      <div className={styles["bar"]}></div>
      <span className={styles["acc-name"]}>Discover Debit</span>
      <span className={styles["balance"]}>$10,213</span>
      <img className={styles["chip"]} src={chip}></img>
    </div>
  );
};

export default CreditCard;
