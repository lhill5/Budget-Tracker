import styles from "../styles/CardSelector.module.css";
import chip from "../icons/chip.png"; // with import

const formatNum = (num) => {
  var parts = num.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
};

const CardSelector = (props) => {
  return (
    <div className={styles["credit-card"]} style={props.style}>
      {/* <div className={styles["bar"]}></div> */}
      <span className={styles["acc-name"]}>{props.accountName}</span>
      <span className={styles["balance"]}>
        ${formatNum(props.accountBalance)}
      </span>
      <img className={styles["chip"]} src={chip}></img>
    </div>
  );
};

export default CardSelector;
