import React from "react"
import axios from "axios";
import { message } from "antd";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";

import { BASE_URL } from '../Constant';
import classes from './Login.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const eye = <FontAwesomeIcon icon={faEye} />;
const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;

const Login = () => {
    const history = useHistory();
    const [error, seterror] = React.useState("")
    const [login, setLogin] = React.useState({})
    const [passwordShown, setPasswordShown] = React.useState(false);
    const handleChange = (event) => {
        setLogin({ ...login, [event.target.name]: event.target.value });

    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = JSON.stringify(login)
        const headers = { 'Content-Type': 'application/json' }
        try {
            const response = await axios.post(`${BASE_URL}/user/login`,
                data,
                { headers: headers }
            )

            const token = response.data.data.token
            const userToken = jwt_decode(token)
            localStorage.setItem('token', token)

            message.success({
                content: response.data.message,
                style: {
                    marginTop: '10vh',
                },
            });

            history.push('/store')
        }

        catch (error) {
            seterror({ error: error.message })
        }
    };

    React.useEffect(() => {
    }, [error])

    return (
        <div >
            <h2 className={classes.Login}>Log In</h2>
            <form onSubmit={handleSubmit}>
                <fieldset className={classes.Form}>
                    <label >
                        Email:
                        <input required={true} className={classes.label1} name="email" onChange={handleChange} type="email" />
                    </label>

                    <label >
                        Password:
                        <input required={true} className={classes.label2} name="password" onChange={handleChange} type={passwordShown ? "text" : "password"} />
                        <i className={classes.icon} onClick={() => setPasswordShown(!passwordShown)}>{passwordShown ? eye : eyeSlash}</i>

                    </label>
                </fieldset>
                <button className={classes.login} type="submit">Login</button>
            </form>
        </div>
    )
};
export default Login;