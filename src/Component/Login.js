import React from "react"
import classes from './Login.module.css';
import { BASE_URL } from './Constant';
import { useHistory } from "react-router-dom";
import { message } from "antd";
import axios from "axios";

const Login = () => {
    const history = useHistory();
    const [error, seterror] = React.useState("")
    const [login, setLogin] = React.useState("")

    const handleChange = (event) => {
        setLogin({ ...login, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = JSON.stringify()
        const headers = { 'Content-Type': 'application/json' }
        try {
            const response = await axios.post(`${BASE_URL}/signup/create`, data, { headers: headers })

            const result = await response.data

            message.success({
                content: "You are succesfully logged in ",
                style: {
                    marginTop: '10vh',
                },
            });

            history.push('/store')

        } catch (error) {
            seterror({ error: error.message })
        }
    };

    React.useEffect(() => {
        console.log(error);
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
                        <input required={true} className={classes.label2} name="password" type="password" onChange={handleChange} />
                    </label>
                </fieldset>
                <button className={classes.login} type="submit">Login</button>
            </form>
        </div>
    )
};
export default Login;