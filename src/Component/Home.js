import React from "react";
const Navbar = () => {
  return (
    <ul>
      <p>
        <li>
          <a href="/">Home</a>
        </li>
      </p>
      <p>
        <li>
          <a href="/about-us">About Us</a>
        </li>
      </p>
      <p>
        <li>
          <a href="/sign-up">Sign Up</a>
        </li>
      </p>
      <li>
        <a href="/store">Store</a>
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
