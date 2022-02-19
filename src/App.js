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
import ResearchOffers from "./pages/ResearchOffers";

function App() {
  const [logged, setLogged] = useState(false);
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [title, setTitle] = useState("");

  const handleSearch = (event) => {
    const inputTitle = event.target.value;
    // Fonction qui va chercher dans les keywords la présence de ce qu'il y a dans l'input
    setTitle(inputTitle);
  };

  return (
    <div className="App">
      <Router>
        <Header
          setLogged={setLogged}
          logged={logged}
          token={token}
          setToken={setToken}
          handleSearch={handleSearch}
          title={title}
          setTitle={setTitle}
        />

        <Routes>
          <Route
            path="/"
            element={<Home logged={logged} setLogged={setLogged} />}
          ></Route>
          <Route path="/offer/:id" element={<Offer />}></Route>
          <Route
            path="/research"
            element={<ResearchOffers title={title} />}
          ></Route>
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
