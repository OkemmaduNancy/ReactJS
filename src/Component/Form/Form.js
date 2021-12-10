import React from "react"
import classes from './Form.module.css';
import { BASE_URL } from '../Constant';
import { useHistory } from "react-router-dom";
import { message } from "antd";
import axios from "axios";

const Form = () => {
    const history = useHistory()
    const [formData, updateFormData] = React.useState({});
    const [error, seterror] = React.useState("")

    const handleChange = (event) => {
        updateFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = JSON.stringify(formData)
        const headers = { 'Content-Type': 'application/json' }
        try {
            const response = await axios(`${BASE_URL}/product/create`,
                data,
                { headers: headers }
            )

            await response.data

            message.success({
                content: "You are succesfully login ",
                style: {
                    marginTop: '10vh',
                },
            });
            history.push('/')


        } catch (error) {
            seterror({ error: error.message })
        }
    };

    React.useEffect(() => {
    }, [error])

    return (
        <div className={classes.sign}>
            <h2>Form</h2>
            <form onSubmit={handleSubmit}>
                <fieldset className={classes.Form}>
                    <label className={classes.label1}>
                        Name:
                        <input name="name" onChange={handleChange} />
                    </label>
                    <label className={classes.label1}>
                        Quantity:
                        <input name="quantity" onChange={handleChange} />
                    </label>
                    <label className={classes.label1}>
                        Price:
                        <input name="price" onChange={handleChange} />
                    </label>
                    <label className={classes.label1}>
                        Description:
                        <input name="description" onChange={handleChange} />
                    </label>
                    <label className={classes.label1}>
                        Color:
                        <input name="color" onChange={handleChange} />
                    </label>
                    <label className={classes.label1}>
                        Categories:
                        <input name="categories" onChange={handleChange} />
                    </label>
                </fieldset>
                <button className={classes.form_button} type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;