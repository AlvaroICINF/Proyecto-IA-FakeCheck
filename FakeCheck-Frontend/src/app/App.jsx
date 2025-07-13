import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./Layout.jsx";

import Home from "../screens/home.jsx";
import TextBox from "../screens/textBox.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/fakeCheck" element={<TextBox />} />
        </Route>
      </Routes>
    </Router>
  );
}
