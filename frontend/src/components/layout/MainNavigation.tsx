import { Link } from "react-router-dom";

const LINKS = {
  "/": "Expense Report",
  "/graph": "Graph",
  "/expense-list": "Expense List",
  "/contact-us": "Contact Us",
  "/about-us": "About Us",
  "/login": "Login",
};

const MainNavigation = () => {
  return (
    <header className="mx-5 mt-3 d-flex align-items-center justify-content-between">
      <h1>
        <Link className="text-dark text-decoration-none" to="/">
          Expense Report
        </Link>
      </h1>
      <nav>
        <ul className="list-inline-unstyled">
          {Object.entries(LINKS).map(([key, value]) => (
            <li key={key} className="ms-5 list-inline-item">
              <Link
                className="text-dark text-decoration-none"
                style={{ fontSize: "1.5rem" }}
                to={key}
              >
                {value}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
