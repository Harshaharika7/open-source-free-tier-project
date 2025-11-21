import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

function Home() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="container py-5 text-center">
      <h2>Welcome Home!</h2>
      <p className="mb-4">Navigate to your dashboard to see the data.</p>
      <Link className="btn btn-success me-2" to="/dashboard">
        Go to Dashboard
      </Link>
      <button className="btn btn-outline-secondary" onClick={toggleTheme}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default Home;
