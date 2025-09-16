import { Route, Routes } from "react-router";
import Layout from "./components/layout/Layout";
import NewItem from "./pages/NewItem";
import Home from "./pages/Home";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-item" element={<NewItem />} />
      </Routes>
    </Layout>
  );
}

export default App;
