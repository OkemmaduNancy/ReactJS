import React, { useEffect, useState } from "react";
import classes from "./Store.module.css";
import Card from "./Card";
// import RightNav from "./Nav/RightNav";
import Navbar from "./Nav/Navbar";
// import Burger from "./Nav/Burger";
import { BASE_URL } from './Constant';

const Nav = () => {
  return (
    <div className={classes.storeDiv}>
      <label className={classes.siteLabel} for="site-search">Search :</label>
      <input className={classes.siteInput} type="search"></input>
      <button className={classes.storeButton} >Search</button>
    </div>
  );
};

const Store = () => {
  const [productsInfo, setProducts] = useState([])
  const [error, seterror] = useState("")

  async function getProduct() {
    try {
      const result = await fetch(`${BASE_URL}/product/all`)
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
    <div className={classes.bodyStore}>
      <Navbar />
      {/* <RightNav /> */}
      {/* <Burger /> */}
      <Nav />
      <a className={classes.Card}>
        {productsInfo.map(({ imageUrl, description, name, _id, }) => (
          <Card imageUrl={imageUrl} description={description} id={_id} card_button={name} />
        ))}
      </a>
    </div>
  );
};

export default Store;
