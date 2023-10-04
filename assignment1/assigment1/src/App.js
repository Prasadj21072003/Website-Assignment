import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path={"/"} element={<Home id={1} />} />
          <Route path={"/page/:id"} element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
