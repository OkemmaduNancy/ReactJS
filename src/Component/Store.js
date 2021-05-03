import React from "react";
import classes from "./Store.module.css";
import Card from "./Card";
import { data } from "./data";

const Nav = () => {
  return (
    <h6 className={classes.Store}>
      <label for="site-search">Search :</label>
      <input type="search"></input>
      <button>Search</button>
    </h6>
  );
};

const Store = () => {
  return (
    <div>
      <Nav />

      {data.map(({ imageUrl, description, id}) => (
        <Card imageUrl={imageUrl} description={description}  id={id}/>
      ))}
    </div>
  );
};

export default Store;
