import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./router/main/Home";
import Login from "./router/user/Login";
import SignupContainer from "./router/user/SignupContainer";
import Detail from "./router/wine/Detail";
import Survey from "./router/survey/Survey";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accounts/login" element={<Login />} />
          <Route path="/accounts/signup" element={<SignupContainer />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/survey" element={<Survey />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
