import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  // NavLink,
  // Navigate,
} from "react-router-dom";

//page components
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";

//css styles
import "./App.css";
import ThemeSelector from "./components/ThemeSelector";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { mode } = useTheme();

  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        {/* <NavLink to="/">Home</NavLink>
        <NavLink to="/create">Create</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/recipe">Recipe</NavLink> */}
        <ThemeSelector />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/recipes/:id" element={<Recipe />}></Route>
          {/* <Route path="*" element={<Home />}></Route> */}
          {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
