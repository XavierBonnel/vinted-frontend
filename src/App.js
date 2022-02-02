import "./App.css";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import axios from "axios";

import Home from "./pages/Home";
import Offer from "./pages/Offer";

function App() {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      const response = await axios.get("");
      setData(response.data);
      setIsLoading(false);
    };

    fetchdata();
  }, []);

  return (
    <div className="App">
      <Router>
        <Link to="/">
          <h1>Vinted</h1>
        </Link>

        <nav>
          <Link to="/home">Home </Link>
          <Link to="/offer">Offer</Link>
        </nav>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/offer" element={<Offer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
