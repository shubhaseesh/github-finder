import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div class="hero">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Oops!</h1>
          <p class="py-6">404 - Page not found.</p>
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
