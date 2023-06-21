import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Oops!</h1>
          <p className="py-6">404 - Page not found.</p>
          <Link to="/" className="btn btn-primary">
            <FaHome />
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
