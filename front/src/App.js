import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./router/main/Home";
import Login from "./router/user/Login";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/accounts/login" component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
