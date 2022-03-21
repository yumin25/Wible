import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./router/main/Home";
import Login from "./router/user/Login";
import SignupContainer from "./router/user/SignupContainer";
import Search from "./router/main/Search/Search";
import Detail from "./router/wine/Detail";
import Survey from "./router/survey/Survey";
import SurveyResult from "./router/survey/SurveyResult";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accounts/login" element={<Login />} />
          <Route path="/accounts/signup" element={<SignupContainer />} />
          <Route path="/search" element={<Search />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/survey/result" element={<SurveyResult />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
