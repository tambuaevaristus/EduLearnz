import react from "react";

import Header from "./components/Header";
import Login from "./screen/Login";

import Home from "./screen/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CourseContent from "./screen/CourseContent";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/course/{id}">
             {/* <Header /> */}
            <CourseContent />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
