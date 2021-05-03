import React from "react";

const Navbar = () => {
  return (
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="store">Store</a>
      </li>
      <li>
        <a href="about-us">About Us</a>
      </li>
      <li>
        <a href="contact-us">Contact Us</a>
      </li>
    </ul>
  );
};
const Home = () => {
  return (
    <div>
      <Navbar />
      <h1> Other details </h1>
    </div>
  );
};

export default Home;
