import { Component, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Home from "./Component/Home";
import Store from "./Component/Store"
import AboutUs from "./Component/AboutUs";
import ContactUs from "./Component/ContactUs";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<h1>loading</h1>}>
          <Switch>
            <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/app" component={App} />
              <Route exact path="/store" component={Store} />
              <Route path="/about-us" component={AboutUs} />
              <Route path="/contact-us" component={ContactUs} />
            </div>
            <Route path="*" component={() => <h1> Not found </h1>} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default Routes;