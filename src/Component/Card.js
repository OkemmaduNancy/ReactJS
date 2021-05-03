import React from "react";
import classes from "./Card.module.css";
// const style = {
//     img: {
//         color: "white",
//         width: "400px"
//     }
// }

function Card({ imageUrl, description, id, }) {
    const classname = id === '1' ? classes.img1 : id === '2' ? classes.img2 : classes.img3
  return (
    <div >
      <img src={imageUrl} className={classname} />
      <p>{description}</p>
    </div>
  );
}

export default Card;
