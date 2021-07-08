import React from "react"
import classes from './form.module.css';
import { BASE_URL } from './Constant';

const Form = () => {

    const [formData, updateFormData] = React.useState({});
    const [error, seterror] = React.useState("")

    const handleChange = (event) => {
        updateFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`${BASE_URL}/product/create`, {
                method: 'Post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })
            const data = await response.json()

        } catch (error) {
            seterror({ error: error.message })
        }
    };

    React.useEffect(() => {
        console.log(error);
    }, [error])

    return (
        <div className={classes.sign}>
            <h2>Fill the form bellow</h2>
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