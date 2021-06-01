import React from "react";
import classes from "./ContactUs.module.css";
import { useHistory } from 'react-router-dom';

const Contact = () => {
  const history = useHistory();

  return (
    <div>
      <h1 className={classes.ContactUs}>Contact Us</h1>

      <p1>
        <form id="form1" />
        <ul>
          <li>
            <label for="fname">First Name:</label>
            <input type="text" name="first-name" id="fname" />
          </li>
          <br />
          <li>
            <label for="lname">Last Name:</label>
            <input type="text" name="last-name" id="lname" />
          </li>
          <br />
          <li>
            Age: <input type="number" />
          </li>
          <br />
          <li>
            Date of Birth: <input type="date" />
          </li>
          <br />
          <li>
            Upload Photo: <input type="file" />
          </li>
          <br />
          <li>
            Gender:{" "}
            <select id="mySelect">
              <option>Male</option>
              <option>Female</option>
            </select>
          </li>
          <br />
          <li>
            Marital Status: <input type="radio" />
          </li>
          <br />
          <li>
            Country:{" "}
            <select id="mySelect">
              <option>America</option>
              <option>Califonia</option>
              <option>Nigeria</option>
              <option>Canada</option>
            </select>
          </li>
          <br />
          <li>
            Graduated: <input type="checkbox" />
          </li>
          <br />
          <li>
            <button onClick={() => history.push("/App")} type="submit">Submit</button>
          </li>
        </ul>
        <form />
      </p1>
    </div>
  );
};

export default Contact;


