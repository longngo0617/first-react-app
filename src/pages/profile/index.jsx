import InfoStudent from "./components/InfoStudent";
import CourseStudent from "./components/CourseStudent";
import ProjectStudent from "./components/ProjectStudent";
import PaymentStudent from "./components/PaymentStudent";

const Profile = () => {
  return (
    <>
      <section className="section top-info">
        <div className="information">
          <div className="avatar">
            <img src="/img/avt1.jpg" alt="" />
          </div>
          <div className="name">Trần Nghĩa</div>
          <p className="member">Thành viên của team CFD1-OFFLINE</p>
        </div>
        <div className="container">
          <div className="tab">
            <div className="tab__title">
              <a href="#" className="js-tab-active">
                Thông tin tài khoản
              </a>
              <a href="#">Khoá học của tôi</a>
              <a href="#">Dự án đã làm</a>
              <a href="#">Lịch sử thanh toán</a>
            </div>
            <div className="tab__content">
                <InfoStudent/>
                <CourseStudent/>
                <ProjectStudent/>
                <PaymentStudent/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
