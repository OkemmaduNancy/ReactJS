import React, { Component } from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";

import classes from "./App.module.css";
// import ButtonClick from './ButtonClick';
import ProductData from "./ProductData";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductPreview from "./ProductPreview/ProductPreview";
import Topbar from "./Topbar/Topbar";

// class Mydate {
//   /**
//    * Gets my name as eric
//    * @returns {string}
//    */
//   getMeOut(){
//     return "eric"
//   }
// }

// const obj = new Mydate()

// const myName = obj.getMeOut()

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

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('Next state => ', nextState);
  //   console.log('Current State => ', this.state);

  // return true;
  // }

  //  NewRoute = () => {
  //    <div>
  //      <p>New Route</p>
  //    </div>
  //  }

  render() {
    return (
      // <BrowserRouter>
      // <Switch>
      //   <Route path="/new" component={this.NewRoute} />

        <div className="App">
          {/* <ButtonClick /> */}

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
      //   </Switch>
      // </BrowserRouter>
    );
  }
}

export default App;
