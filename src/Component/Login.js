import React from "react"
import classes from './Login.module.css';
import { BASE_URL } from './Constant';
import { useHistory } from "react-router-dom";
import { message } from "antd";

const Login = () => {
    const history = useHistory()
    const [error, seterror] = React.useState("")
    const [login, setLogin] = React.useState("")

    const handleChange = (event) => {
        setLogin({ ...login, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`${BASE_URL}/login/create`, {
                method: 'Post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(login),
            })
            const data = await response.json()


            message.success({
                content: "You are succesfully login ",
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
            <fieldset className={classes.Form}>
                <label >
                    Email:
                    <input className={classes.label1} name="email" onChange={handleChange} type="email" />
                </label>

                <label >
                    Password:
                    <input className={classes.label2} name="password" type="password" onChange={handleChange} />
                </label>
            </fieldset>
            <button onClick={handleSubmit} className={classes.login} >Login</button>
        </div>
    )
};

export default Login;