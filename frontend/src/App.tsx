import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Graph from "./components/graphComponents/Graph";
import "bootstrap/dist/css/bootstrap.css";

const URL_BASENAME = "expense-report";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/graph" />} />
        <Route path="graph" element={<Graph />} />
      </Routes>
    </Layout>
  );
}
export default App;
