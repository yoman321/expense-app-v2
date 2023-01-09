import { Link } from "react-router-dom";

const LINKS = {
  "/": "Expense Report",
  "/graph": "Graph",
  "/expense-list": "Expense List",
  "/contact-us": "Contact Us",
  "/about-us": "About Us",
  "/login": "Login",
};
const LINKS_ENTRIES = Object.entries(LINKS);

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
          {LINKS_ENTRIES.map(([key, value], index) => (
            <li key={key} className="ms-2 list-inline-item">
              <Link
                className="text-dark text-decoration-none"
                style={{ fontSize: "1.5rem" }}
                to={key}
              >
                {value}
              </Link>
              {index !== LINKS_ENTRIES.length - 1 && (
                <div className="vr ms-3" />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
