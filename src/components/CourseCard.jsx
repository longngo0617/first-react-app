import { Link } from "react-router-dom";
const CourseCard = (props) => {
  let { title, short_description, thumbnail, cfd_teacher, slug, _id } = props;
  let cover = thumbnail.link;
  return (
    <div className="col-md-4 course__item">
      <Link
        to={`/chi-tiet-khoa-hoc/${slug}-p${_id}`}
        className="course__item-img"
      >
        <img src={cover} alt="alter" />
      </Link>
      <div className="course__item-info">
        <div className="course__item-wrap">
          <h2 className="course__item-title">{title}</h2>
          <p className="course__item-des">{short_description}</p>
        </div>
        <div className="course__item-details">
          <div className="teacher">
            <div className="avatar">
              <img src={cfd_teacher.avatar?.link} alt="" />
            </div>
            <div className="name">{cfd_teacher.title}</div>
          </div>
          <Link to={`/dang-ky/${slug}-p${_id}`} className="btn btn-register">
            Đăng ký
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
