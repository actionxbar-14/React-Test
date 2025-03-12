import React from "react";
// import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { Link, Router } from 'react-router-dom';
import Dashboard from "./components/Dashboard";

const Home = () => (
  <h1 className="text-center text-5xl font-extrabold text-blue-700 shadow-md pt-7 p-6 rounded-lg">
    {" "}
    Welcome to the User Dashboard
  </h1>
);

const App = () => {
  return (
    <Router>
      <nav className="bg-blue-700 p-6 text-center text-md">
        <Link to="/" className="text-white">
          Home
        </Link>{" "}
        |
        <Link className="text-white" to="/about">
          Dashboard
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
