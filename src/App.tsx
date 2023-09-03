import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route index element={<MainPage></MainPage>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
