import { useNavigate } from "react-router-dom";

const LINKS = {
  "About Us": "/about-us",
  Login: "/login",
};

const MainPage = () => {
  const navigate = useNavigate();
  const routeChangeHandler = (route: string) => {
    navigate(route);
  };
  return (
    <div className="container d-flex justify-content-center">
      <div className="position-absolute bottom-50">
        <h1 className="display-2">Welcome To the Expense Report App</h1>
        <div className="row d-flex justify-content-center">
          {Object.entries(LINKS).map(([key, value]) => (
            <button
              key={key}
              className="mx-3 col-2 btn btn-secondary btn-lg text-white"
              onClick={() => routeChangeHandler(value)}
            >
              {key}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MainPage;
