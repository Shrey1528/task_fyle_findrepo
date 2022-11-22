import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Repository from "./pages/Repository";
import Loader from "../src/components/main/Loader";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<Repository />} />
        <Route path="/loader" element={<Loader />} />
      </Routes>
    </>
  );
}

export default App;
