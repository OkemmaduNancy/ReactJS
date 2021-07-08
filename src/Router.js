import { Component, Suspense } from "react";
// import OverlayLoader from "react-loading-overlay"
// import Loader from "react-loader-spinner";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Form from "./Component/Form";
import Home from "./Component/Home";
import Store from "./Component/Store";
import AboutUs from "./Component/AboutUs";
import SignUp from "./Component/SignUp";
import ProductDetails from "./Component/ProductDetails";
// import { Loader } from "./Overlay";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Suspense >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/form" component={Form} />
            <Route exact path="/app" component={App} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/product/:id" component={ProductDetails} />
            <Route path="/store" component={Store} />
            <Route path="/sign-up" component={SignUp} />

            <Route path="*" component={() => <h1> Not found </h1>} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default Routes;
