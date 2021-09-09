import React, { useState } from "react";
import classes from "./SignUp.module.css";
import { message } from 'antd';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { BASE_URL, INPUTS_FIELDS } from './Constant';
import { useHistory } from "react-router-dom";
import axios from "axios";

const eye = <FontAwesomeIcon icon={faEye} />;
const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;

const Sign = () => {
  const history = useHistory();
  const [passwordShown, setPasswordShown] = useState(false);
  const [isConfirmPwd, setConfirmPwd] = useState("");
  const [userInput, setUserInput] = useState({});
  const [error, seterror] = useState("");
  const [pwdStrength, setpwdStrength] = useState('')

  const passwordConfirm = (e) => {
    const checkPassword = e.target.value === userInput.password
    setConfirmPwd(checkPassword ? <h3 style={{ color: 'green' }}>{"password matched"}</h3> : <h3 style={{ color: 'red' }}>{"password did not match"}</h3>);
  };

  const handleInputChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUserInput({ ...userInput, [name]: value })

    const passwordRegex = {
      'strong': /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*]).{8,10}$/,
      'medium': /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/
    };

    if (passwordRegex.medium.test(value)) {
      setpwdStrength(<h3 style={{ color: 'orange' }}>{'Good'}</h3>)

      if (passwordRegex.strong.test(value)) {
        setpwdStrength(<h3 style={{ color: 'green' }}>{'Strong'}</h3>)
      }
    } else {
      setpwdStrength(<h3 style={{ color: 'red' }}>{'Weak'}</h3>)
    }



  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = JSON.stringify(userInput)
    const headers = { 'Content-Type': 'application/json' }
    try {
      const response = await axios.post(`${BASE_URL}/signup/create`, data, { headers: headers })

      const result = await response.data

      message.success({
        content: "You are succesfully signed Up ",
        style: {
          marginTop: '10vh',
        },
      });

      history.push('/login')

    } catch (error) {
      seterror({ error: error.message })
    }
  }

  return (
    <div>
      <h1 className={classes.signUp} >Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <fieldset className={classes.fieldset1}>
          {INPUTS_FIELDS.map(input => <div className={classes.signUp_form}>
            {input.label}
            {input.type === "select" ?
              <select key={input.id} required={input.required} name={input.name} onChange={handleInputChange} type={input.type} >
                {input.options.map(item => <option value={item}>
                  {item}
                </option>)}
              </select> :
              <input key={input.id} required={input.required} name={input.name} onChange={handleInputChange} type={input.type} />
            }
          </div>
          )}
          <div className={classes.file}>
            Upload Photo:
            <input name="upload_photo" onChange={handleInputChange} type="file" />
          </div>

          <div className={classes.password}>
            Password:
            <input required={true} name="password" onChange={handleInputChange} type={passwordShown ? "text" : "password"} />
            <i onClick={() => setPasswordShown(!passwordShown)}>{passwordShown ? eye : eyeSlash}</i>
            <span >{pwdStrength}</span>
          </div>

          <div className={classes.passwordConfirm}>
            Confirm password:
            <input required={true} name="Comfirmpassword" onChange={passwordConfirm} type={passwordShown ? "text" : "password"} />
            <span>{isConfirmPwd}</span>
          </div>
        </fieldset >
        <button className={classes.signUp_button} type="submit" >Submit</button>
      </form >
    </div >
  );
};
export default Sign;


