import "./App.scss";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  const [logged, setLogged] = useState(false);

  return (
    <div className="App">
      <Router>
        <Header setLogged={setLogged} logged={logged} />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/offer/:id" element={<Offer />}></Route>
          <Route
            path="/signup"
            element={<Signup setLogged={setLogged} logged={logged} />}
          ></Route>
          <Route
            path="/login"
            element={<Login setLogged={setLogged} logged={logged} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
