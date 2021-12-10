import React from "react";

// const Test = () => {
//     const [check, setCheck] = React.useState(0)
//     return(
//         <div>
//             <h1 data-testid="checker">{check}</h1>
//             <h2>This is the testing page</h2>
//         </div>
//     )
// }
// export default Test;

const Cart = () => {
    const [formData, updateFormData] = React.useState({name: "", price: "", quantity: "", desc: "", color: ""});

    const handleChange = (event) => {
        updateFormData({ ...formData, [event.target.name]: event.target.value });
    };
    return (
        <div className="form-header">
        <input 
        onChange={handleChange}
        data-testid="add-name"
        type="text"
        value={formData.name}
        className="form-control"
        placeholder="Name"
        name="name"
        />
        <input 
        onChange={handleChange}
        data-testid="add-price"
        type="number"
        value={formData.price}
        className="form-control"
        placeholder="Price"
        name="price"
        />
        <input 
        onChange={handleChange}
        data-testid="add-quantity"
        type="number"
        value={formData.quantity}
        className="form-control"
        placeholder="Quantity"
        name="quantity"
        />
        <input 
        onChange={handleChange}
        data-testid="add-desc"
        type="text"
        value={formData.desc}
        className="form-control"
        placeholder="Description"
        name="desc"
        />
        <input 
        onChange={handleChange}
        data-testid="add-color"
        type="text"
        value={formData.color}
        className="form-control"
        placeholder="Color"
        name="color"
        />
        <div>
            <button data-testid="signIn-btn" className="btn" >SignIn</button>
        </div>

            </div>
    )
}

export default Cart