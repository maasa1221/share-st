import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

<<<<<<< HEAD
import HomeScreen from "./screens/HomeScreen";
import ListScreen from "./screens/ListScreen";
import CreateScreen from "./screens/CreateScreen";
import "bootstrap/dist/css/bootstrap.min.css";
=======
import HomeScreen from './screens/HomeScreen';
import ListScreen from './screens/ListScreen';
import CreateScreen from './screens/CreateScreen';
import SettingScreen from './screens/SettingScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> ListScreen

const AppNavigator = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <div>
<<<<<<< HEAD
      <Route exact path="/" component={HomeScreen} />
      <Route path="/list" component={ListScreen} />
      <Route path="/create" component={CreateScreen} />
=======
      <Route exact path="/" component = {HomeScreen}/>
      <Route path="/list" component = {ListScreen}/>
      <Route path="/create" component = {CreateScreen}/>
      <Route path="/setting" component = {SettingScreen}/>
>>>>>>> ListScreen
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
