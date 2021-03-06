import React from "react";
import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ListScreen from "./screens/ListScreen";
import CreateScreen from "./screens/CreateScreen";
import SettingScreen from "./screens/SettingScreen";
import "bootstrap/dist/css/bootstrap.min.css";

const AppNavigator = () => (
  <Router>
    <Route exact path="/" component={HomeScreen} />
    <Route path="/list" component={ListScreen} />
    <Route path="/create" component={CreateScreen} />
    <Route path="/setting" component={SettingScreen} />
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
