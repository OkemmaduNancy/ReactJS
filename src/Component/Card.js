import React from "react";
import { Button, message } from 'antd';
import classes from "./Card.module.css";
import { Link } from "react-router-dom";
import { BASE_URL } from './Constant';

const Card = ({ imageUrl, description, id, card_button }) => {

  const [error, seterror] = React.useState("")
  const handledelete = async () => {
    try {
      const result = await fetch(`${BASE_URL}/product/${id}`, {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
      })

      const data = await result.json()
      message.success({
        content: "Product Deleted Succesfully",

      });
    }
    catch (error) {
      seterror({ error: error.message })
    }
  }

  return (
    <div className={classes.Card}>
      <Link to={`/product/${id}`}>
        <img className={classes.image} src={imageUrl} />
        <div>{description}</div>
      </Link>
      <button>{card_button}</button>
      <Button type="primary" onClick={() => handledelete(id)}>delete</Button>
    </div>
  );
}

export default Card;