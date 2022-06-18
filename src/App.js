import react from "react";

import Header from "./components/Header";
import Login from "./screen/Login";

import Home from "./screen/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CourseContent from "./screen/CourseContent";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/course">
             <Header />
            <CourseContent />
            <Footer />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
