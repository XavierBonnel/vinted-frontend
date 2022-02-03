import "./App.scss";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get(
        "https://my--vinted-backend.herokuapp.com/offers"
      );
      setData(response.data);
      setIsLoading(false);
    };

    fetchdata();
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <div className="hero-banner">Hero banner</div>

        <Link to="/"></Link>

        <nav>
          <Link to="/home">Home </Link>
          <Link to="/offer">Offer</Link>
        </nav>
        {/* <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/offer" element={<Offer />} />
        </Routes> */}

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {data.map((offer, index) => {
              console.log(offer);
              return (
                <Link to="offer/:{offer._id}" offer={offer}>
                  <div className="offer-card" key={index}>
                    <p>{offer.owner.account.username}</p>
                    <div>
                      <img src={offer.product_image} alt={offer.product_name} />
                    </div>
                    <p>{offer.product_price}</p>
                    <p>{offer.product_details[1].TAILLE}</p>
                    <p>{offer.product_details[0].MARQUE}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
