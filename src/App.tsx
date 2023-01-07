import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components:
import Home from "./Components/Pages/Home/Home";
import Search from "./Components/Pages/Search/Search";
import Recipe from "./Components/Pages/Recipe/Recipe";
import Create from "./Components/Pages/Create/Create";
import Navbar from "./Components/Navbar/Navbar";
import ThemeSelector from "./Components/ThemeSelector/ThemeSelector";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />

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
