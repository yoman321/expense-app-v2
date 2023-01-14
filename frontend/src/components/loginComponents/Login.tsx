import CardLayout from "../layout/CardLayout";

const Login = () => {
  return (
    <div
      className="container"
      style={{
        marginTop: "15rem",
        marginLeft: "50%",
        transform: "translate(-50%, -50%)",
        maxWidth: "45rem",
        zIndex: "10",
        position: "fixed",
      }}
    >
      <CardLayout>
        <h1>Login</h1>
        <form>
          <div className="form-group my-3">
            <label htmlFor="emailAddress" style={{ width: "100%" }}>
              Email Address
              <input
                className="mt-2 form-control"
                type="email"
                name="emailAddress"
              />
            </label>
          </div>
          <div className="form-group my-3">
            <label htmlFor="password" style={{ width: "100%" }}>
              Password
              <input
                className="mt-2 form-control"
                type="password"
                name="password"
              ></input>
            </label>
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary pull-right" type="submit">
              Login
            </button>
          </div>
        </form>
      </CardLayout>
    </div>
  );
};
export default Login;
