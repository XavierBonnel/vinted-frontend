import "./App.scss";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="hero-banner">Hero banner</div>

        {/* <Link to="/"></Link> */}

        <nav>
          <Link to="/">Home </Link>
        </nav>
        {/* <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/offer" element={<Offer />} />
        </Routes> */}

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/offer/:id" element={<Offer />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
