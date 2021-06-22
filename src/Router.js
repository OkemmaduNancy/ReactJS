import { Component, Suspense } from "react";
import OverlayLoader from "react-loading-overlay"
// import Loader from "react-loader-spinner";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Form from "./Component/Form";
import Home from "./Component/Home";
import Store from "./Component/Store";
import AboutUs from "./Component/AboutUs";
import SignUp from "./Component/SignUp";
import ProductDetails from "./Component/ProductDetails";
class Routes extends Component {
  render() {
    return (
      <Router>
        <OverlayLoader
          color={'red'}
          laoder="ScaleLoader"
          text="Laoding..Please wait!"
          active={true}
          backgroundColor={'black'}
          opacity=".4"
          spinner timeout={1000}>
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
        </OverlayLoader>
      </Router>
    );
  }
}

export default Routes;
