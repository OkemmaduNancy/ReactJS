import React from "react";
import classes from "./Card.module.css";
// const style = {
//     img: {
//         color: "white",
//         width: "400px"
//     }
// }

function Card({ imageUrl, description, id, btn}) {
    const classname = id === '1' ? classes.img1 : 
    id === '2' ? classes.img2 : 
    id === '3' ? classes.img3 : 
    id === '4' ? classes.img4 :
   id === '5' ? classes.img5 : classes.img6
  return (
    <div className={classes.Card}>
      <img src={imageUrl} className={classname} />
      <button>{btn}</button>
      <p>{description}</p>
    </div>
  );
}

export default Card;
