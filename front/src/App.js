import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./router/main/Home";
import Login from "./router/user/Login";
import SignupContainer from "./router/user/SignupContainer";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accounts/login" element={<Login />} />
          <Route path="/accounts/signup" element={<SignupContainer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
