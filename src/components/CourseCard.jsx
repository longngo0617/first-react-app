import {Link} from 'react-router-dom';

const CourseCard = ({ title, des, image }) => {
  return (
    <div className="col-md-4 course__item">
      <Link to="/chi-tiet-khoa-hoc" className="course__item-img">
        <img src={image} alt="alter" />
      </Link>
      <div className="course__item-info">
        <div className="course__item-wrap">
          <h2 className="course__item-title">{title}</h2>
          <p className="course__item-des">
            {des}
          </p>
        </div>
        <div className="course__item-details">
          <div className="teacher">
            <div className="avatar">
              <img src="img/avt.png" alt="" />
            </div>
            <div className="name">Trần Nghĩa</div>
          </div>
          <Link to="/dang-ky-khoa-hoc" className="btn btn-register">
            Đăng ký
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
