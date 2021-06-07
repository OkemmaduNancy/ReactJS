import React, { useEffect, useState } from "react";
import classes from "./Store.module.css";
import Card from "./Card";
import { data } from "./data";
import { useHistory } from "react-router";

const Nav = () => {
  const history = useHistory
  return (
    <h6 className={classes.Store}>
      <label for="site-search">Search :</label>
      <input type="search"></input>
      <button className={classes.Sbtn} >Search</button>
    </h6>
  );
};

const Store = () => {
  const [productsInfo, setProducts] = useState([])
  const [error, seterror] = useState("")

  async function getProduct() {
    try {
      const result = await fetch('http://localhost:4000/v1/product/all')
      if (result.status > 300) {
        alert("Error occured")
      }

      const data = await result.json()
      setProducts(data);
    } catch (error) {
      seterror({ error: error.message })
    }
  }

  useEffect(() => {
    getProduct()
  }, [])
  return (
    <div className={classes.body}>
      <Nav />
      <a className={classes.Card}>
        {productsInfo.map(({ imageUrl, description, name, _id, }) => (
          <Card imageUrl={imageUrl} description={description} id={_id} btn={name} />
        ))}
      </a>
    </div>
  );
};

export default Store;
