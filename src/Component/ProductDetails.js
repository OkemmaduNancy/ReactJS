import { message } from "antd";
import { Content } from "antd/lib/layout/layout";
import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";
import classes from './ProductDetails.module.css'
const ProductDetails = () => {

    const { id } = useParams()

    const { imageUrl } = useParams()


    const [productDetails, setProductDetails] = React.useState({})
    const [error, seterror] = React.useState("")


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

            </div>
        </div >
    );
}




export default ProductDetails;