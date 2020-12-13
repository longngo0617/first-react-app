import { Link } from "react-router-dom";

const BannerCourse = ({course}) => {
  
  let checkRegister = course.course_status ==='sap-khai-giang' || (new Date().getTime() < new Date(course.opening_time).getTime())
  return (
    <div className="banner__course">
      <div className="banner__course--inner" style={{ '--background': course.template_color_banner || '#cde6fb'}}>
        <h2>{course.title}</h2>
        <div className="banner__course--info">
          <p className="info">
            {" "}
            <span>Khai giảng:</span> {course.opening_time}
          </p>
          <p className="info">
            {" "}
            <span>Thời lượng:</span> {course.content.length} buổi
          </p>
        </div>
        {
          checkRegister ?  <Link to={`/dang-ky/${course.slug}-p${course._id}`} className="btn btn-round">
          Đăng ký
        </Link> : <p style={{fontSize: 17,color: 'red'}}>{course.course_status==='dang-dien-ra' ? 'khoa hoc dang dien ra ban khong the dang ky' : 'khoa hoc da ket thuc ban khong the dang ky'}</p>
        }
       
      </div>
      <div className="inner__bottom">
        <div className="video">
          <img src="img/play.svg" alt="" />
          <span>Video giới thiệu</span>
        </div>
        <div className="price">{course.money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1,')} VND</div>
      </div>
    </div>
  );
};

export default BannerCourse;
