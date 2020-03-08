import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Feeds from "./pages/Feeds";
import FeedDetail from "./pages/FeedDetail";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Feeds} />
          <Route exact path="/feed/:id" component={FeedDetail} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
