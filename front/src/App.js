import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./router/main/Home";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
