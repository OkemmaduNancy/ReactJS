import React, { useEffect, useState } from "react";
import classes from "./SignUp.module.css";
import { useHistory } from 'react-router-dom';
import { message } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { BASE_URL } from './Constant';

const eye = <FontAwesomeIcon icon={faEye} />;
const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;

const Sign = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [isConfirmPwd, setConfirmPwd] = useState("");
  const [userInput, setUserInput] = useState({});
  const [error, seterror] = useState("")

  const passwordConfirm = (e) => {
    const checkPassword = e.target.value === userInput.password
    setConfirmPwd(checkPassword ? <h3 style={{ color: 'green' }}>{"password matched"}</h3> : <h3 style={{ color: 'red' }}>{"password did not match"}</h3>);
  };

  const handleInputChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUserInput({ ...userInput, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/signup/create`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userInput),

      })
      const data = await response.json()

      message.success({
        content: "You are succesfully signed Up ",
        style: {
          marginTop: '10vh',
        },
      });
    } catch (error) {
      seterror({ error: error.message })
    }
  }

  return (
    <div>
      <h1 className={classes.signUp} >Sign Up</h1>

      <form onSubmit={handleSubmit} >
        <fieldset className={classes.fieldset1}>

          <div className={classes.signUp_form}>
            First Name:
            <input name="firstname" onChange={handleInputChange} type="text" />
          </div>
          <div className={classes.signUp_form}>
            Last Name:
            <input name="lastname" onChange={handleInputChange} type="text" />
          </div>
          <div className={classes.signUp_form}>
            Age:
            <input name="age" onChange={handleInputChange} type="number" />
          </div>
          <div className={classes.signUp_form}>
            Email:
            <input name="email" onChange={handleInputChange} type="email" />
          </div>
          <div className={classes.signUp_form}>
            Password:
            <input name="password" onChange={handleInputChange} type={passwordShown ? "text" : "password"} />
            <i onClick={() => setPasswordShown(!passwordShown)}>{passwordShown ? eye : eyeSlash}</i>
          </div>
          <div className={classes.signUp_form}>
            Confirm password:
            <input name="Comfirmpassword" onChange={passwordConfirm} type={passwordShown ? "text" : "password"} />
            <sub>{isConfirmPwd}</sub>
          </div>
          <div className={classes.signUp_form}>
            Date of Birth:
            <input name="date_of_birth" onChange={handleInputChange} type="date" />
          </div>

          <div className={classes.signUp_form}>
            <div className={classes.file}>
              Upload Photo:
              <input name="upload_photo" onChange={handleInputChange} type="file" />
            </div>
          </div>
          <div className={classes.signUp_form}>
            Gender:{" "}
            <select name="gender" onChange={handleInputChange} id="mySelect" >
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className={classes.signUp_form}>
            Marital Status:{" "}
            <select name="marita_status" onChange={handleInputChange} id="mySelect" >
              <option>Married</option>
              <option>Single</option>
              <option>Engaged</option>
            </select>
          </div>
          <div className={classes.signUp_form}>
            Country:{" "}
            <select name="country" onChange={handleInputChange} id="mySelect" >
              <option>America</option>
              <option>Califonia</option>
              <option>Nigeria</option>
              <option>Canada</option>
            </select>
          </div>
          <div className={classes.signUp_form}>
            Job:{" "}
            <select name="job" onChange={handleInputChange} id="mySelect" >
              <option>Employed</option>
              <option>Unemployed</option>
              <option>Self Employed</option>
              <option>Student</option>
            </select>
          </div>
        </fieldset >
        <button className={classes.signUp_button} type="submit" >Submit</button>
      </form >
    </div >
  );
};

export default Sign;


