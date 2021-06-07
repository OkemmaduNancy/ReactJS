import { Component, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Form from "./Form/Form";
import Home from "./Component/Home";
import Store from "./Component/Store";
import AboutUs from "./Component/AboutUs";
import ContactUs from "./Component/ContactUs";
import ProductDetails from "./Component/ProductDetails";
class Routes extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<h1>loading</h1>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/form" component={Form} />
            <Route exact path="/app" component={App} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/product/:id" component={ProductDetails} />
            <Route path="/store" component={Store} />
            <Route path="/contact-us" component={ContactUs} />

            <Route path="*" component={() => <h1> Not found </h1>} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default Routes;
