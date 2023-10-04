import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Singleproperty from "./pages/singleproperty/Singleproperty";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path={"/"} element={<Home city={"London"} />} />
          <Route path={"/NewYork"} element={<Home city={"New York"} />} />
          <Route path={"/:id"} element={<Home />} />
          <Route path={"/property/:id"} element={<Singleproperty />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
