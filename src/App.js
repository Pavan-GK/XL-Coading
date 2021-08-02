import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import SignIn from "./Components/SignIn";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SignIn}></Route>
          <Route exact path="/Home" component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
