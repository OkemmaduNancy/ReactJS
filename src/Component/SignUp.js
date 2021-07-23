import React, { useState } from "react";
import classes from "./SignUp.module.css";
import { message, Select } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { BASE_URL, INPUTS_FIELDS } from './Constant';


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
          {INPUTS_FIELDS.map(input => <div className={classes.signUp_form}>
            {input.label}
            {input.type === "select" ?
              <select name={input.name} onChange={handleInputChange} type={input.type} >
                {input.options.map(item => <option value={item}>
                  {item}
                </option>)}
              </select> :
              <input name={input.name} onChange={handleInputChange} type={input.type} />
            }
          </div>
          )}
          <div className={classes.file}>
            Upload Photo:
            <input name="upload_photo" onChange={handleInputChange} type="file" />
          </div>
          <div className={classes.password}>
            Password:
            <input name="password" onChange={handleInputChange} type={passwordShown ? "text" : "password"} />
            <i onClick={() => setPasswordShown(!passwordShown)}>{passwordShown ? eye : eyeSlash}</i>
          </div>
          <div className={classes.passwordConfirm}>
            Confirm password:
            <input name="Comfirmpassword" onChange={passwordConfirm} type={passwordShown ? "text" : "password"} />
            <sub>{isConfirmPwd}</sub>
          </div>
        </fieldset >
        <button className={classes.signUp_button} type="submit" >Submit</button>
      </form >
    </div >
  );
};

export default Sign;


