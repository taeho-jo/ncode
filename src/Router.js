import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import Feeds from "./pages/Feeds";
import DetailFeed from "./pages/DetailFeed";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Feeds} />
            <Route exact path="/feed/:id" component={DetailFeed} />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}
export default Routes;
