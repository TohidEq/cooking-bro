import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components:
import Home from "./Components/Home/Home";
import Search from "./Components/Search/Search";
import Recipe from "./Components/Recipe/Recipe";
import Create from "./Components/Create/Create";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipes/:id" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
