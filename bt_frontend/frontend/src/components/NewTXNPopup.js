import React, { useState } from "react";
import styles from "../styles/NewTXNPopup.module.css";
import ReactDom from "react-dom";
import classNames from "classnames";

export default function NewTXNPopup(props) {
  const [accounts, setAccounts] = useState(["Discover Savings", "Roth IRA"]);
  const [category, setCategory] = useState("");
  const [formTypeState, setFormTypeState] = useState("");
  const [formState, setFormState] = useState({});

  if (!props.displayNewTXN) return null;

  const subcategories = {
    Housing: [
      "Mortgage",
      "Rent",
      "Home/renters insurance",
      "Utilities",
      "Maintenance",
      "Misc",
    ],
    Transportation: [
      "Gas",
      "Car payment",
      "Car insurance",
      "Rideshare",
      "Misc",
    ],
    Food: ["Groceries", "Restaurants/Take-out", "Misc"],
    Bills: ["Electric", "Water", "Gas", "Misc"],
    Healthcare: ["Medical", "Dental", "Prescription", "Misc"],
    Entertainment: ["Hobby", "Games", "Travel", "Concerts", "Misc"],
    "Personal care": ["Hygiene products", "Haircut", "Spa/Salon", "Misc"],
    Clothing: ["Apparel", "Shoes", "Misc"],
    Education: [
      "Tuition",
      "Books",
      "School Supplies",
      "Tutoring/Online Help",
      "Misc",
    ],
    "Charitable donations": ["Non-profit", "Religious", "Misc"],
    Savings: [
      "IRA",
      "401k",
      "HRA/HSA",
      "529 Plan",
      "Bonds",
      "CDs",
      "Money-Market",
      "Mutual Funds",
      "ETFs",
      "Stocks",
    ],
    Misc: [],
  };

  const isEmpty = (obj, key) => (key in obj ? !obj[key] : false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form_data = new FormData(event.target);

    let is_valid = true;
    for (const [key, value] of form_data) {
      setFormState((prevFormState) => ({
        ...prevFormState,
        [key]: value,
      }));

      if (!value && key !== "Description") {
        is_valid = false;
      }
    }

    if (is_valid) {
      props.onClose();
    }
  };

  return ReactDom.createPortal(
    <>
      <div className={styles.PopupBackground}></div>
      <div className={styles.TXNPopup}>
        <h1>New Transaction</h1>
        <button className={styles["close-btn"]} onClick={props.onClose}>
          x
        </button>
        <hr />
        <form
          className={styles.new_txn_form}
          id="new_txn_form"
          onSubmit={handleSubmit}
        >
          <div>
            <label>*Account: </label>
            <select
              name="Account"
              id="Account"
              className={classNames({
                [styles.red_border]: isEmpty(formState, "Account"),
              })}
            >
              <option isdisabled="true" value="">
                -- select an option --
              </option>
              {accounts.map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
          </div>
          <div>
            <label>*Transaction Type: </label>
            <select
              name="Type"
              id="Type"
              className={classNames({
                [styles.red_border]: isEmpty(formState, "Type"),
              })}
              onChange={(el) => setFormTypeState(el.target.value)}
            >
              <option isdisabled="true" value="">
                -- select an option --
              </option>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
              <option value="Transfer">Transfer</option>
              <option value="Refund">Refund</option>
              <option value="Investment">Investment</option>
            </select>
          </div>
          <div>
            <label>*Amount: </label>
            <input
              name="Amount"
              id="Amount"
              type="number"
              step="any"
              placeholder="enter amount"
              className={classNames({
                [styles.red_border]: isEmpty(formState, "Amount"),
              })}
            ></input>
          </div>

          {formTypeState === "Expense" ? (
            <div>
              <label>*Category: </label>
              <select
                name="Category"
                id="Category"
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                className={classNames({
                  [styles.red_border]: isEmpty(formState, "Category"),
                })}
              >
                <option isdisabled="true" value="">
                  -- select an option --
                </option>
                <option value="Housing">Housing</option>
                <option value="Transportation">Transportation</option>
                <option value="Food">Food</option>
                <option value="Bills">Bills</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Personal care">Personal care</option>
                <option value="Clothing">Clothing</option>
                <option value="Education">Education</option>
                <option value="Charitable donations">
                  Charitable donations
                </option>
                <option value="Savings">Savings</option>
                <option value="Misc">Misc</option>
              </select>
            </div>
          ) : null}

          {formTypeState === "Expense" ? (
            <div>
              <label>*Subcategory: </label>
              <select
                name="Subcategory"
                id="Subcategory"
                className={classNames({
                  [styles.red_border]: isEmpty(formState, "SubCategory"),
                })}
              >
                <option isdisabled="true" value="">
                  -- select an option --
                </option>
                {category !== "" &&
                  subcategories[category].map((item) => (
                    <option value={item}>{item}</option>
                  ))}
              </select>
            </div>
          ) : null}

          <div>
            <label>Description (optional): </label>
            <input name="Description" id="Description" type="text"></input>
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>,
    document.getElementById("newTXNPortal")
  );
}
