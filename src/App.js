import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./sass/main.css";

// //redux
// import { connect } from "react-redux";
// import { loadUser } from "./actions/auth";

//components
import Form from "./components/Form";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/form" component={Form} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
