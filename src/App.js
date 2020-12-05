import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UserProvider from "./hooks/useAuth";
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
import Page404 from "./pages/page404";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import PrivateRouter from "./components/PrivateRouter";

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Switch>
              <Route path="/chi-tiet-khoa-hoc">
                <CourseDetails />
              </Route>
              <PrivateRouter path="/profile">
                <Profile />
              </PrivateRouter>
              <Route path="/cfd-team">
                <CFDTeam />
              </Route>
              <Route path="/hop-tac">
                <Collaborate />
              </Route>
              <Route path="/sign-in">
                <SignIn />
              </Route>
              <Route path="/sign-up">
                <SignUp />
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
          </main>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
