import React from "react";
import "../assets/styles/App.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Me from "../pages/Me";
import Talks from "../pages/Talks";
import Courses from "../pages/Courses";

const App = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/me" component={Me} />
      <Route exact path="/talks" component={Talks} />
      <Route exact path="/courses" component={Courses} />
    </Switch>
  </HashRouter>
);

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <img src={Profile} alt="Lesly" />
//     </div>
//   );
// }

export default App;
