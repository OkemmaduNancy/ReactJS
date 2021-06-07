import { message } from "antd";
import { Content } from "antd/lib/layout/layout";
import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import classes from './ProductDetails.module.css'
const ProductDetails = () => {

    const { id } = useParams()
    // console.log("id is...", id);

    const { imageUrl } = useParams()
    // const { price } = useParams()
    // const { descriptions } = useParams()

    const [productDetails, setProductDetails] = React.useState({})
    const [error, seterror] = React.useState("")

    // const params = useParams()
    // console.log(params);

    async function getProducts() {
        try {
            const details = await fetch(`http://localhost:4000/v1/product/${id}`, {
                method: 'get',
                headers: { 'Content-Type': 'application/json' },
            })
            const data = await details.json()
            setProductDetails(data)
        }
        catch (error) {
            seterror(error.message)
            message.error({ Content: "error occured" })
        }
    }

    useEffect(() => {
        getProducts()
    }, [])
    console.log(productDetails);
    return (
        <div className={classes.product}>
            <div className={classes.product_img}>
                <img src={productDetails.imageUrl} />
            </div>
            <div className={classes.info}>
                <div className={classes.name}  >{productDetails.name}</div>
                <div className={classes.price}>{productDetails.price} </div>
                <div className={classes.cart}>{productDetails.cart}</div>
                <div className={classes.categories}>{productDetails.categories}</div>
                <div className={classes.description}>{productDetails.description}</div>
            </div>
            <div>
                {/* <h5 className={classes.productName}>Amazon</h5>
                <p>Your dream watch</p>
                <h1 className={classes.productPrice}>$17.99</h1>
                <h3>Add to cart</h3>
                <h4 className={classes.productDescription}>Amazon smart watch is a quality watch with 5yrs guaranteed</h4>
                <p className={classes.productNote}> Please note that this item might be available based on the delivery area</p> */}
            </div>
        </div >
    );
}




export default ProductDetails;