import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <h3>
        <Link to="/">Expense Report</Link>
      </h3>
      <nav>
        <ul>
          <li>
            <Link to="/graph">Graph</Link>
          </li>
          <li>
            <Link to="/expnese-list">Expense List</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;