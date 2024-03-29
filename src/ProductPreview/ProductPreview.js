import React from 'react';
import classes from './ProductPreview.module.css';

const ProductPreview = (props) => {

    const d = new Date()
    const hour = d.getHours()
    const mins = d.getMinutes()

    return (
        <div className={classes.ProductPreview}>

            <img src={props.currentPreviewImage} alt="Product Preview" />

            {
                props.currentSelectedFeature === 1 ?
                    <div className={classes.HeartBeatSection}>
                        <i class="fas fa-heart"></i>
                        <p>70</p>
                    </div>
                    :
                    <div className={classes.TimeSection}>
                        <p>{`${hour}:${mins}`}</p>
                    </div>
            }

        </div >
    );

}

export default ProductPreview;