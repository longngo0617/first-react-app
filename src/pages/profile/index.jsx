import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";
import InfoStudent from "./components/InfoStudent";
import CourseStudent from "./components/CourseStudent";
import ProjectStudent from "./components/ProjectStudent";
import PaymentStudent from "./components/PaymentStudent";
import { useEffect, useState } from "react";
import Api from "../../components/Api";

const Profile = () => {
  let { url } = useRouteMatch();
  let user = JSON.parse(localStorage.getItem("user"));
  let [infoUser, setInfoUser] = useState({});
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    Api(`rest/user/${user._id}`)
      .get()
      .then((res) => {
        if (res) {
          setInfoUser(res);
          setLoading(false);
        }
      });
  }, []);
  return (
    <>
      <section className="section top-info">
        <div className="information">
          <div className="avatar">
            <img src={user.avatar.link} alt="" />
          </div>
          <div className="name">{infoUser.name}</div>
          <p className="member">Thành viên của team CFD1-OFFLINE</p>
        </div>
        <div className="container">
          <div className="tab">
            <div className="tab__title">
              <NavLink exact to={`${url}`} activeClassName="js-tab-active">
                Thông tin tài khoản{" "}
              </NavLink>
              <NavLink to={`${url}/khoa-hoc`} activeClassName="js-tab-active">
                Khoá học của tôi
              </NavLink>
              <NavLink
                to={`${url}/project-student`}
                activeClassName="js-tab-active"
              >
                Dự án đã làm
              </NavLink>
              <NavLink to={`${url}/payment`} activeClassName="js-tab-active">
                Lịch sử thanh toán
              </NavLink>
            </div>
            <div className="tab__content">
              <Switch>
                <Route path={`${url}/khoa-hoc`}>
                  <CourseStudent />
                </Route>
                <Route path={`${url}/project-student`}>
                  <ProjectStudent />
                </Route>
                <Route path={`${url}/payment`}>
                  <PaymentStudent />
                </Route>
                <Route exact path={`${url}`}>
                  <InfoStudent />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
