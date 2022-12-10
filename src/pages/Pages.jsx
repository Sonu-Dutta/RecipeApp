import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import { Route, Routes } from "react-router-dom";
import Recipe from "./Recipe";

export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/cuisine/:type" element={<Cuisine />}></Route>
      <Route path="/searched/:search" element={<Searched />}></Route>
      <Route path="/recipe/:name" element={<Recipe />}></Route>
    </Routes>
  );
}
