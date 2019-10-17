import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import ListScreen from "./screens/ListScreen";
import CreateScreen from "./screens/CreateScreen";
import "bootstrap/dist/css/bootstrap.min.css";

const AppNavigator = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <div>
      <Route exact path="/" component={HomeScreen} />
      <Route path="/list" component={ListScreen} />
      <Route path="/create" component={CreateScreen} />
    </div>
  </Router>
);

class App extends React.Component {
  render() {
    return (
      <div>
        <AppNavigator />
      </div>
    );
  }
}

export default App;
