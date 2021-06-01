import React, { Component } from "react";
// import {  } from "react-router-dom";
import classes from "./App.module.css";
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
    // newData: [],
    // error: ""
  };

  // async componentDidMount() {
  //   try {
  //     const result = await fetch('http://localhost:4000/v1/product/all')

  //     if (result.status > 300) {
  //       alert("An error occured")
  //     }

  //     const data = await result.json()
  //     this.setState({ newData: data })
  //   } catch (error) {
  //     this.setState({ error: error.message })
  //   }
  // }


  // componentDidMount() {
  //   fetch('http://localhost:4000/v1/product/all').then(result => {
  //     if (result.status > 300) {
  //       alert("An error occured")
  //     }
  //     result.json().then(re => this.setState({ newData: re }))
  //   })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }


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
          {/* {this.state.newData.map((item, index) => <h1 key={index}>{item.price}</h1>)} */}
        </div>
      </div>
      //   </Switch>
      // </BrowserRouter>
    );
  }
}

export default App;
