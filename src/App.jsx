import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import PokemonInfo from "./pages/PokemonInfo/PokemonInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokemonInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
