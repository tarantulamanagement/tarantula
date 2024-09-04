import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/trnt.la" element={<Home />} />
      </Routes>
    </Router>
  );
}


export default App;
