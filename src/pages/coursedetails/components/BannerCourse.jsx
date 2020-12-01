const BannerCourse = () => {
  return (
    <div className="banner__course">
      <div className="banner__course--inner">
        <h2>Thực chiến</h2>
        <h2>Front-End Căn Bản</h2>
        <div className="banner__course--info">
          <p className="info">
            {" "}
            <span>Khai giảng:</span> 12/10/2020
          </p>
          <p className="info">
            {" "}
            <span>Thời lượng:</span> 18 buổi
          </p>
        </div>
        <a href="#" className="btn btn-round">
          Đăng ký
        </a>
      </div>
      <div className="inner__bottom">
        <div className="video">
          <img src="img/play.svg" alt="" />
          <span>Video giới thiệu</span>
        </div>
        <div className="price">4.000.000 VND</div>
      </div>
    </div>
  );
};

export default BannerCourse;
