import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/add-product">Add Product</Link>
      <Link to="/products">Products</Link>
      <Link to="/signin">Sign In</Link>
    </nav>
  );
};

export default Navbar;