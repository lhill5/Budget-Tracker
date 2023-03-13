import React, { useState } from "react";
import ReactDom from "react-dom";
import axios from "axios";

import styles from "../styles/NewAccountPopup.module.css";
import classNames from "classnames";
import CardDesign from "./CardDesign";
import ColorPicker from "./ColorPicker";

const numLength = (num) => {
  return num.toString().replace(".", "").length;
};

export default function NewAccountPopup(props) {
  const [accountName, setAccountName] = useState("");
  const [accountBalance, setAccountBalance] = useState(0);
  const [cardColor, setCardColor] = useState("var(--background-red)");
  const [allAccounts, setAllAccounts] = useState([]);

  if (!props.displayNewAccount) return null;

  const getAccount = () => {
    return new Promise((resolve, reject) => {
      axios
        .get("http://localhost:8000/api/ledgers/")
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => reject(error));
    });
  };

  const createAccount = () => {
    axios
      .post("http://localhost:8000/api/ledgers/", {
        general_ledger: 1,
        id: accountName,
        balance: accountBalance,
      })
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
  };

  const updateAccount = () => {
    axios
      .put(`http://localhost:8000/api/ledgers/${accountName}/`, {
        general_ledger: 1,
        id: accountName,
        balance: accountBalance,
      })
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
  };

  const handleAccountSubmit = async () => {
    let all_accounts = await getAccount(accountName);
    let account_lookup = all_accounts.filter(
      (account) => account.id === accountName
    );

    if (account_lookup.length !== 0) {
      console.log("updating account");
      updateAccount(accountName);
    } else {
      console.log("creating account");
      createAccount(accountName);
    }
  };

  return ReactDom.createPortal(
    <>
      <div className={styles.PopupBackground}></div>
      <div className={styles.AccountPopup}>
        <div className={styles["container"]}>
          <h1 className={styles["header"]}>Style your new Card</h1>
          <button className={styles["close-btn"]} onClick={props.onClose}>
            x
          </button>

          <div className={styles["account-input"]}>
            <div className={styles["flex-col"]}>
              <label>Account name:</label>
              <input
                className={styles["account-info"]}
                placeholder="Enter account name"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
              />
            </div>

            <div className={styles["flex-col"]}>
              <label>Account balance:</label>
              <input
                type="number"
                className={styles["account-info"]}
                placeholder="Enter account balance"
                value={accountBalance}
                onChange={(e) =>
                  numLength(e.target.value) < 10
                    ? setAccountBalance(e.target.value)
                    : null
                }
              />
            </div>
          </div>

          <CardDesign
            accountName={accountName}
            accountBalance={accountBalance}
            style={{ background: cardColor }}
          ></CardDesign>

          <div className={styles["color-palette"]}>
            <ColorPicker
              style={{ background: "var(--background-red)" }}
              setColor={() => setCardColor("var(--background-red)")}
            ></ColorPicker>
            <ColorPicker
              style={{ background: "var(--background-light-blue)" }}
              setColor={() => setCardColor("var(--background-light-blue)")}
            ></ColorPicker>
            <ColorPicker
              style={{ background: "var(--background-orange)" }}
              setColor={() => setCardColor("var(--background-orange)")}
            ></ColorPicker>
            <ColorPicker
              style={{ background: "var(--background-green)" }}
              setColor={() => setCardColor("var(--background-green)")}
            ></ColorPicker>
            <ColorPicker
              style={{ background: "var(--background-purple)" }}
              setColor={() => setCardColor("var(--background-purple)")}
            ></ColorPicker>
            <ColorPicker
              style={{ background: "var(--background-aqua)" }}
              setColor={() => setCardColor("var(--background-aqua)")}
            ></ColorPicker>
            <ColorPicker
              style={{ background: "var(--background-blue)" }}
              setColor={() => setCardColor("var(--background-blue)")}
            ></ColorPicker>
            <ColorPicker
              style={{ background: "var(--background-light-purple)" }}
              setColor={() => setCardColor("var(--background-light-purple)")}
            ></ColorPicker>
            <ColorPicker
              style={{ background: "var(--background-black)" }}
              setColor={() => setCardColor("var(--background-black)")}
            ></ColorPicker>
          </div>

          <button
            type="submit"
            className={styles["submit-button"]}
            onClick={() => {
              handleAccountSubmit();
              props.onClose();
              //   setAccountName("");
              //   setAccountBalance(0);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>,
    document.getElementById("newAccountPortal")
  );
}
