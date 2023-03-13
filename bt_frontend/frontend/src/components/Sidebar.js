import styles from "../styles/Sidebar.module.css";

import { ReactComponent as Dashboard } from "../icons/dashboard.svg";
import { ReactComponent as Spending } from "../icons/spending.svg";
import { ReactComponent as Money } from "../icons/money.svg";
import { ReactComponent as DeathStarIcon } from "../icons/death_star.svg";
import { ReactComponent as PearIcon } from "../icons/pear_logo.svg";

const Sidebar = (props) => {
  return (
    <div className={styles["sidebar"]}>
      <nav className={styles["sidebar-nav"]}>
        <ul>
          <li>
            <a href="#">
              <div className={styles["svg-viewbox"]}>
                <Dashboard />
              </div>
              <span>Dashboard</span>
            </a>
          </li>

          <li>
            <a href="#">
              <div className={styles["svg-viewbox"]}>
                <Money />
              </div>
              <span>Spending</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
