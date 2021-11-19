import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import {BrowserRouter, Route, Switch} from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path ="/">{Section}</Route>
        <Route exact path ="/about">{About}</Route>
        <Route exact path ="/contact">{Contact}</Route>
      </Switch>
      <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;

