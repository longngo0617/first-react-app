const CourseStudent = () => {
  return (
    <div className="tab__content-2 tabct">
      <div className="course">
        <a href="#" className="course__image">
          <img src="/img/img-course-1.jpg" alt="" />
        </a>
        <div className="course__info">
          <a href="#" className="course__info--name">
            front-end căn bản
          </a>
          <p className="course__info--date">Khai giảng ngày 09/09/2019</p>
          <div className="course__info--details">
            <div className="item">
              <img src="/img/clock.svg" alt="" />
              <span>54 giờ</span>
            </div>
            <div className="item">
              <span>25 video</span>
            </div>
            <div className="item">
              <img src="/img/member.svg" alt="" />
              <span>20 học viên</span>
            </div>
          </div>
          <div className="progress">
            <div className="line"></div>
            <span>30%</span>
          </div>
          <div className="btn btn-round btn-continue">Tiếp tục học</div>
        </div>
      </div>
      <div className="course">
        <a href="#" className="course__image">
          <img src="/img/img-course-2.jpg" alt="" />
        </a>
        <div className="course__info">
          <a href="#" className="course__info--name">
            front-end nâng cao
          </a>
          <p className="course__info--date">Khai giảng ngày 09/09/2019</p>
          <div className="course__info--details">
            <div className="item">
              <img src="/img/clock.svg" alt="" />
              <span>54 giờ</span>
            </div>
            <div className="item">
              <span>25 video</span>
            </div>
            <div className="item">
              <img src="/img/member.svg" alt="" />
              <span>20 học viên</span>
            </div>
          </div>
          <div className="progress">
            <div className="line"></div>
            <span>30%</span>
          </div>
          <div className="btn btn-round btn-continue">Tiếp tục học</div>
        </div>
      </div>
    </div>
  );
};

export default CourseStudent;
