import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

import Sidebar from "./components/Sidebar";
import LineChart from "./components/LineChart";
import NewTXNPopup from "./components/NewTXNPopup";
import AccountSidebar from "./components/AccountSidebar";

function App() {
  const [displayNewTXN, setDisplayNewTXN] = useState(false);

  useEffect(() => {
    // AddData();
  }, []);

  const GetData = () => {
    axios
      .get("http://localhost:8000/api/transactions/")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const AddData = () => {
    axios
      .post("http://localhost:8000/api/ledgers/", {
        general_ledger: 1,
        name: "Discover Debit",
        // id: 1,
        // ledger: 5,
        // date: "2023-03-07",
        // amount: 1000,
        // txn_type: "sell",
        // category: "clothing",
        // subcategory: "shoes",
        // description: "this is for my shoes",
      })
      .then((res) => console.log(res))
      .catch((error) => console.err(error));
  };

  return (
    <>
      <div className="background-box">
        <div className="main-box">
          <div className="sidebar">
            <Sidebar></Sidebar>
          </div>
          <div className="main-content">
            <div className="navbar">
              <div className=""></div>
            </div>
            <div className="chart-filter"></div>
            <LineChart></LineChart>
            <AccountSidebar
              openNewTXN={() => setDisplayNewTXN(true)}
            ></AccountSidebar>
            <NewTXNPopup
              displayNewTXN={displayNewTXN}
              onClose={() => setDisplayNewTXN(false)}
            ></NewTXNPopup>{" "}
          </div>
        </div>
        {/* <Navbar closeTXNPopup={() => setDisplayNewTXN(true)}></Navbar>
      <main className="main">
        <div className={`App grid`}>
          <div className={kpi_styles["kpi-grid"]}>
            <KPI
              className={kpi_styles.net_worth}
              name={"Net Worth"}
              value={1234}
            ></KPI>
            <KPI
              className={kpi_styles.inflow}
              name={"Inflow"}
              value={1000}
            ></KPI>
            <KPI
              className={kpi_styles.expenses}
              name={"Expenses"}
              value={500}
            ></KPI>
          </div>

          <LineChart></LineChart>
          <Transactions></Transactions>
        </div>
      </main>
      <NewTXNPopup
        displayNewTXN={displayNewTXN}
        onClose={() => setDisplayNewTXN(false)}
      ></NewTXNPopup> */}
      </div>
    </>
  );
}

export default App;
