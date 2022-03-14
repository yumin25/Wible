import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./router/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" component={Home} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
