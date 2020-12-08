import React from "react";
import { Route, Switch } from "react-router-dom";
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

//routes
const routes = [
  { path: "/", name: "Home", Component: Home },
  {
    path: "/chi-tiet-khoa-hoc",
    name: "Course Details",
    Component: CourseDetails,
  },
  { path: "/cfd-team", name: "CFD Team", Component: CFDTeam },
  { path: "/hop-tac", name: "Hop Tac", Component: Collaborate },
  { path: "/sign-in", name: "Dang Nhap", Component: SignIn },
  { path: "/sign-up", name: "Dang Ky", Component: SignUp },
  { path: "/dang-ky-khoa-hoc", name: "Dang Ky Khoa Hoc", Component: Register },
  {
    path: "/dang-ky-khoa-hoc-thanh-cong",
    name: "Dang Ky Khoa Hoc Thanh Cong",
    Component: RegisterSuccess,
  },
  { path: "/project", name: "Du An", Component: Project },
  {
    path: "/thong-tin-thanh-toan",
    name: "Thong Tin Thanh Toan",
    Component: PaymentInfo,
  },
  { path: "*", name: "Khong Co Trang Can Tim", Component: Page404 },
];

function App() {
  return (
    <>
      <UserProvider>
        <Header />
        <div className="App">
          <main>
            <Switch>
              <PrivateRouter path="/profile">
                <Profile />
              </PrivateRouter>
              <PrivateRouter path="/dang-ky-khoa-hoc" Component={Register} />
              {routes.map(({ path, Component }) => (
                <Route key={path} exact path={path}>
                  <Component />
                </Route>
              ))}
            </Switch>
          </main>
        </div>
        <Footer />
      </UserProvider>
    </>
  );
}

export default App;
