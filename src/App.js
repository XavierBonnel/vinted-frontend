import "./App.scss";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Publish from "./pages/Publish";

function App() {
  const [logged, setLogged] = useState(false);
  const [token, setToken] = useState(Cookies.get("token") || null);

  return (
    <div className="App">
      <Router>
        <Header
          setLogged={setLogged}
          logged={logged}
          token={token}
          setToken={setToken}
        />

        <Routes>
          <Route
            path="/"
            element={<Home logged={logged} setLogged={setLogged} />}
          ></Route>
          <Route path="/offer/:id" element={<Offer />}></Route>
          <Route
            path="/signup"
            element={
              <Signup
                setLogged={setLogged}
                logged={logged}
                token={token}
                setToken={setToken}
              />
            }
          ></Route>
          <Route
            path="/login"
            element={
              <Login
                setLogged={setLogged}
                logged={logged}
                token={token}
                setToken={setToken}
              />
            }
          ></Route>
          <Route path="/publish" element={<Publish token={token} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
