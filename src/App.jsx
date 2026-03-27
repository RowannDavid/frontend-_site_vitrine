import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageError from "./Pages/PageError";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageError />} />
      </Routes>
    </>
  );
}

export default App;