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

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [uploadPhoto, setUploadPhoto] = useState("");
  const [gender, setGender] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [country, setCountry] = useState("");
  const [job, setJob] = useState("");

  const togglePasswordVisiblity = () => {
    const isPassword = passwordShown ? false : true
    setPasswordShown(isPassword);
  };

  const passwordConfirm = (e) => {
    // const isConfirm = isConfirmPwd ? false : true
    const checkPassword = e.target.value === password
    setConfirmPwd(checkPassword ? <h3 style={{ color: 'green' }}>{"password matched"}</h3> : <h3 style={{ color: 'red' }}>{"password did not match"}</h3>);
    console.log(checkPassword);
  };

  const handleSubmit = e => {
    const user = {
      fname: firstname,
      lname: lastname,
      password: password,
      email: email,
      age: age,
      dateOfBirth: dateOfBirth,
      uploadPhoto: uploadPhoto,
      gender: gender,
      maritalStatus: maritalStatus,
      country: country,
      job: job

    }
    console.log(user);
  };

  const handleFirstName = e => {
    setFirstName(e.target.value)
  };
  const handleLastName = e => {
    setLastName(e.target.value)
  };
  const handleAge = e => {
    setAge(e.target.value)
  };
  const handleEmail = e => {
    setEmail(e.target.value)
  };
  const handlePassword = e => {
    setPassword(e.target.value)
  };
  const handleDateOfBirth = e => {
    setDateOfBirth(e.target.value)
  };
  const handleUpload = e => {
    setUploadPhoto(e.target.value)
  };
  const handleGender = e => {
    setGender(e.target.value)
  };
  const handleMaritalStatus = e => {
    setMaritalStatus(e.target.value)
  };
  const handleCountry = e => {
    setCountry(e.target.value)
  };
  const handleJob = e => {
    setJob(e.target.value)
  };




  // useEffect(() => {
  //   passwordConfirm()
  // }, [])

  return (
    <div>
      <h1 className={classes.signUp} >Sign Up</h1>

      <form onSubmit={handleSubmit} />
      <fieldset className={classes.fieldset1}>

        <div className={classes.signUp_form}>
          First Name:
            <input onChange={handleFirstName} type="text" value={firstname} />
        </div>
        <div className={classes.signUp_form}>
          Last Name:
            <input onChange={handleLastName} type="text" value={lastname} />
        </div>
        <div className={classes.signUp_form}>
          Age:
            <input onChange={handleAge} type="number" value={age} />
        </div>
        <div className={classes.signUp_form}>
          Email:
            <input onChange={handleEmail} type="email" value={email} />
        </div>
        <div className={classes.signUp_form}>
          Password:
            <input onChange={handlePassword} type={passwordShown ? "text" : "password"} value={password}
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
            <input onChange={handleDateOfBirth} type="date" value={dateOfBirth} />
        </div>

        <div className={classes.signUp_form}>
          <div className={classes.file}>
            Upload Photo:
            <input onChange={handleUpload} type="file" value={uploadPhoto} />
          </div>
        </div>
        <div className={classes.signUp_form}>
          Gender:{" "}
          <select onChange={handleGender} id="mySelect" value={gender}>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className={classes.signUp_form}>
          Marital Status:{" "}
          <select onChange={handleMaritalStatus} id="mySelect" value={maritalStatus}>
            <option>Married</option>
            <option>Single</option>
            <option>Engaged</option>
          </select>
        </div>
        <div className={classes.signUp_form}>
          Country:{" "}
          <select onChange={handleCountry} id="mySelect" value={country}>
            <option>America</option>
            <option>Califonia</option>
            <option>Nigeria</option>
            <option>Canada</option>
          </select>
        </div>
        <div className={classes.signUp_form}>
          Job:{" "}
          <select onChange={handleJob} id="mySelect" value={job}>
            <option>Employed</option>
            <option>Unemployed</option>
            <option>Self Employed</option>
            <option>Student</option>
          </select>
        </div>
      </fieldset >
      <button className={classes.signUp_button} type="submit" onClick={handleSubmit}>Submit</button>
      <form />
    </div >
  );
};

export default Sign;


