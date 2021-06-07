import React from "react";
import { Button, message } from 'antd';
import classes from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ imageUrl, description, id, btn }) => {
  const [error, seterror] = React.useState("")
  const classname = id === '1' ? classes.img1 :
    id === '2' ? classes.img2 :
      id === '3' ? classes.img3 :
        id === '4' ? classes.img4 :
          id === '5' ? classes.img5 : classes.img6
  const handledelete = async () => {
    try {
      const result = await fetch(`http://localhost:4000/v1/product/${id}`, {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
      })

      const data = await result.json()
      message.success({
        content: "Product Deleted Succesfully",
        style: {
          marginTop: '10vh',
        },
      });
    }
    catch (error) {
      seterror({ error: error.message })
    }
  }


  return (
    <div className={classes.Card}>
      <Link to={`/product/${id}`}>
        <img src={imageUrl} className={classname} />
        <div>{description}</div>
      </Link>
      <button>{btn}</button>
      <Button type="primary" onClick={() => handledelete(id)}>delete</Button>

    </div>
  );
}

export default Card;
