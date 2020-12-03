import React from "react";
import "./style/App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home/index";
import Profile from "./pages/profile/index";
import CourseDetails from "./pages/coursedetails/index";
import Register from "./pages/register";
import RegisterSuccess from "./pages/registersuccess";
import CFDTeam from "./pages/cfdteam";
import Collaborate from "./pages/collaborate";
import PaymentInfo from "./pages/payment-info";
import Project from "./pages/project";

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Page404 from "./pages/page404";

import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/chi-tiet-khoa-hoc">
              <CourseDetails />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/cfd-team">
              <CFDTeam />
            </Route>
            <Route path="/hop-tac">
              <Collaborate />
            </Route>
            <Route path="/sign-in">
              <SignIn/>
            </Route>
            <Route path="/sign-up">
              <SignUp/>
            </Route>
            <Route path="/dang-ky-khoa-hoc">
              <Register />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route>
              <Page404 />
            </Route>
            
          </Switch>

          {/* <RegisterSuccess/> */}
          {/* <PaymentInfo/> */}
          {/* <Project/> */}
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
