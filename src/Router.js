import { Component, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Form from "./Component/Form"
import Login from "./Component/Login";
import Store from "./Component/Store";
import AboutUs from "./Component/AboutUs";
import SignUp from "./Component/SignUp";
import ProductDetails from "./Component/ProductDetails";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Suspense >
          <Switch>
            <Route exact path="/" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/form" component={Form} />
            <Route exact path="/app" component={App} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/product/:id" component={ProductDetails} />
            <Route exact path="/store" component={Store} />

            <Route path="*" component={() => <h1> Not found </h1>} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default Routes;
