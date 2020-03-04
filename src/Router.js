import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Feed from "./pages/Feed";
import DetailFeed from "./pages/DetailFeed";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Feed} />
            <Route exact path="/feed/:id" component={DetailFeed} />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}
export default Routes;
