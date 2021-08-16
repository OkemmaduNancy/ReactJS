import React, { Component } from "react";
import classes from "./App.module.css";
import ProductData from "./ProductData";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductPreview from "./ProductPreview/ProductPreview";
import Topbar from "./Topbar/Topbar";

class App extends Component {
  state = {
    ProductData: ProductData,
    currentSelectedFeature: 0,
    currentPreviewImagePos: 0,

  };
  onColorOptionClick = (pos) => {
    this.setState({ currentPreviewImagePos: pos });
  };

  onFeatureItemClick = (pos) => {
    this.setState({ currentSelectedFeature: pos });
  };

  render() {
    return (
      <div className="App">

        <Topbar />

        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview
              currentPreviewImage={
                this.state.ProductData.colorOptions[
                  this.state.currentPreviewImagePos
                ].imageUrl
              }
              currentSelectedFeature={this.state.currentSelectedFeature}
            />
          </div>

          <div className={classes.ProductData}>
            <ProductDetails
              data={this.state.ProductData}
              onColorOptionClick={this.onColorOptionClick}
              currentPreviewImagePos={this.state.currentPreviewImagePos}
              onFeatureItemClick={this.onFeatureItemClick}
              currentSelectedFeature={this.state.currentSelectedFeature}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
