import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainPage from "./components/MainPageComponents/MainPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Layout>
  );
}

export default App;