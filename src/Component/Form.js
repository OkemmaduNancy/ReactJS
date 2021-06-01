import React from "react"
import classes from './Form'
const Form = () => {
    const [formData, updateFormData] = React.useState({});
    const [error, seterror] = React.useState("")

    const handleChange = (event) => {
        updateFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:4000/v1/product/create', {
                method: 'Post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })
            console.log(response);
            const data = await response.json()

        } catch (error) {
            seterror({ error: error.message })
        }
    };


    React.useEffect(() => {
        console.log(error);
    }, [error])

    return (
        <div className={classes.wrapper}>
            <h2>Fill the form bellow</h2>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        Name
          <input name="name" onChange={handleChange} />
                    </label>
                    <br />
                    <label>
                        Quantity:
          <input name="quantity" onChange={handleChange} />
                    </label>
                    <br />
                    <label>
                        Price:
          <input name="price" onChange={handleChange} />
                    </label>
                    <br />
                    <label>
                        Description:
          <input name="description" onChange={handleChange} />
                    </label>
                    <br />
                    <label>
                        imageUrl:
          <input name="imageUrl" onChange={handleChange} />
                    </label>
                    <br />
                    <label>
                        Color:
          <input name="color" onChange={handleChange} />
                    </label>
                    <br />
                    <label>
                        Categories:
          <input name="categories" onChange={handleChange} />
                    </label>
                    <br />
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;