import "./App.scss";
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Header from "./components/Header";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Publish from "./pages/Publish";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [logged, setLogged] = useState(false);
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [title, setTitle] = useState("");
  const [sort, setSort] = useState("");
  const [showSearch, setShowSearch] = useState(true);

  const [priceLimit, setPriceLimit] = useState(2000);
  // const navigate = useNavigate();

  const handleTitleChange = (event) => {
    const inputTitle = event.target.value;
    // Fonction qui va chercher dans les keywords la présence de ce qu'il y a dans l'input
    setTitle(inputTitle);
    // navigate("/research");
  };

  const handleSort = (event) => {
    // Fonction qui va chercher dans les keywords la présence de ce qu'il y a dans l'input
    if (sort === "price-desc") {
      setSort("price-asc");
    } else {
      setSort("price-desc");
    }
    // navigate("/research");
  };

  const handlePriceLimit = (event) => {
    const inputPriceMax = event.target.value;
    if (inputPriceMax === "") {
      setPriceLimit(Number(3000000));
    } else {
      setPriceLimit(Number(inputPriceMax));
    }
  };

  return (
    <div className="App">
      <Router>
        <Header
          showSearch={showSearch}
          setShowSearch={setShowSearch}
          setLogged={setLogged}
          logged={logged}
          token={token}
          setToken={setToken}
          handleTitleChange={handleTitleChange}
          handleSort={handleSort}
          title={title}
          setTitle={setTitle}
          handlePriceLimit={handlePriceLimit}
          priceLimit={priceLimit}
          setPriceLimit={setPriceLimit}
          setSort={setSort}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                logged={logged}
                setLogged={setLogged}
                handleTitleChange={handleTitleChange}
                title={title}
                setTitle={setTitle}
                sort={sort}
                handlePriceLimit={handlePriceLimit}
                priceLimit={priceLimit}
                setPriceLimit={setPriceLimit}
              />
            }
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
                showSearch={showSearch}
                setShowSearch={setShowSearch}
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
                showSearch={showSearch}
                setShowSearch={setShowSearch}
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
