import React, { useEffect, useState } from "react";
import classes from "./SignUp.module.css";
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const eye = <FontAwesomeIcon icon={faEye} />;
const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;

const Sign = () => {
  const history = useHistory();

  const [passwordShown, setPasswordShown] = useState(false);
  const [isConfirmPwd, setConfirmPwd] = useState("");
  const [userInput, setUserInput] = useState({})

  console.log(userInput);

  const togglePasswordVisiblity = () => {
    const isPassword = passwordShown ? false : true
    setPasswordShown(isPassword);
  };

  const passwordConfirm = (e) => {
    // const isConfirm = isConfirmPwd ? false : true
    const checkPassword = e.target.value === isConfirmPwd
    setConfirmPwd(checkPassword ? <h3 style={{ color: 'green' }}>{"password matched"}</h3> : <h3 style={{ color: 'red' }}>{"password did not match"}</h3>);
    console.log(checkPassword);
  };

  const handleInputChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUserInput({ ...userInput, [name]: value })
  }

  return (
    <div>
      <h1 className={classes.signUp} >Sign Up</h1>

      <form onSubmit={handleInputChange} />
      <fieldset className={classes.fieldset1}>

        <div className={classes.signUp_form}>
          First Name:
          <input onChange={handleInputChange} type="text" />
        </div>
        <div className={classes.signUp_form}>
          Last Name:
          <input onChange={handleInputChange} type="text" />
        </div>
        <div className={classes.signUp_form}>
          Age:
          <input onChange={handleInputChange} type="number" />
        </div>
        <div className={classes.signUp_form}>
          Email:
          <input onChange={handleInputChange} type="email" />
        </div>
        <div className={classes.signUp_form}>
          Password:
          <input onChange={handleInputChange} type={passwordShown ? "text" : "password"}
            name="password" />
          <i onClick={togglePasswordVisiblity}>{passwordShown ? eye : eyeSlash}</i>
        </div>
        <div className={classes.signUp_form}>
          Confirm password:
            <input onChange={passwordConfirm} type={passwordShown ? "text" : "password"} />
          <sub>{isConfirmPwd}</sub>
        </div>
        <div className={classes.signUp_form}>
          Date of Birth:
          <input onChange={handleInputChange} type="date" />
        </div>

        <div className={classes.signUp_form}>
          <div className={classes.file}>
            Upload Photo:
            <input onChange={handleInputChange} type="file" />
          </div>
        </div>
        <div className={classes.signUp_form}>
          Gender:{" "}
          <select onChange={handleInputChange} id="mySelect" >
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className={classes.signUp_form}>
          Marital Status:{" "}
          <select onChange={handleInputChange} id="mySelect" >
            <option>Married</option>
            <option>Single</option>
            <option>Engaged</option>
          </select>
        </div>
        <div className={classes.signUp_form}>
          Country:{" "}
          <select onChange={handleInputChange} id="mySelect" >
            <option>America</option>
            <option>Califonia</option>
            <option>Nigeria</option>
            <option>Canada</option>
          </select>
        </div>
        <div className={classes.signUp_form}>
          Job:{" "}
          <select onChange={handleInputChange} id="mySelect" >
            <option>Employed</option>
            <option>Unemployed</option>
            <option>Self Employed</option>
            <option>Student</option>
          </select>
        </div>
      </fieldset >
      <button className={classes.signUp_button} type="submit" onClick={handleInputChange}>Submit</button>
      <form />
    </div >
  );
};

export default Sign;


