import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { useState } from "react";
import { Button } from "@mui/material";

function App() {
  const [isLog, setIsLog] = useState(true);
  return (
    <Router>
      <div className="App">
        <Header />
        <Button onClick={() => setIsLog(!isLog)} color="secondary">
          {isLog ? "Log Out" : "Log In"}
        </Button>
      </div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/About/:id" component={About} />
        <Route path="/Profile">
          <Profile isLog={isLog} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
