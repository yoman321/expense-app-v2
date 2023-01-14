import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Graph from "./components/graphComponents/Graph";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/graph" element={<Graph />} />
      </Routes>
    </Layout>
  );
}
export default App;
