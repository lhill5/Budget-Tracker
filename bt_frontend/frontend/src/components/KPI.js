import { useState } from "react";
import styles from "../styles/KPI.module.css";

const KPI = (props) => {
  const [value, updateValue] = useState(0);

  const updateNetWorth = (event) => {
    let net_worth = Number(event.target.value);

    if (!Number.isNaN(net_worth)) {
      updateValue(net_worth);
    }
  };

  return (
    <div className={`${props.className} ${styles.kpi}`}>
      <p className={styles.kpi_title}>{props.name}</p>
      <p className={styles.kpi_value}>$1,123</p>
    </div>
  );
};

export default KPI;
