import React, { useState } from "react";

const ProductDetails = (props) => {
    const [getProductDetailsById] = useState({})

    // const { id } = props.match.params.id

    async function productDetails() {
        try {
            const details = await fetch(`http://localhost:4000/v1/product/${id}`, {
                method: 'get',
                headers: { 'Content-Type': 'application/json' },
            })


        }
        catch (error) {

        }
    }
}




export default ProductDetails;