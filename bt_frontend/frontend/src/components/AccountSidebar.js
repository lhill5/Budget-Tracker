import { useState } from "react";
import axios from "axios";

import styles from "../styles/AccountSidebar.module.css";
import CreditCard from "./CreditCard";
import NewAccountPopup from "./NewAccountPopup";

const addAccount = () => {
  axios
    .post("http://localhost:8000/api/ledgers/", {
      general_ledger: 1,
      name: "Discover Debit",
    })
    .then((res) => console.log(res))
    .catch((error) => console.err(error));
};

const AccountSidebar = (props) => {
  const [displayNewAccount, setDisplayNewAccount] = useState(false);
  return (
    <>
      <div className={styles["account-panel"]}>
        <div className={styles["header"]}>
          <span>Accounts</span>
          <button
            className={styles["add-btn"]}
            onClick={() => setDisplayNewAccount(true)}
          >
            +
          </button>
        </div>

        <hr className={styles["divider"]} />

        <CreditCard />

        <button className={styles["new-txn"]} onClick={props.openNewTXN}>
          + New Transaction
        </button>
      </div>
      <div className={styles["account-desc"]}></div>
      <NewAccountPopup
        displayNewAccount={displayNewAccount}
        onClose={() => setDisplayNewAccount(false)}
      ></NewAccountPopup>
    </>
  );
};

export default AccountSidebar;
