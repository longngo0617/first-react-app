const Footer = () => {
  return (
    <footer class="footer">
      <div class="container">
        <div class="row top">
          <div class="footer__left col-md-6">
            <div class="footer__left--des">
              Sáng tạo, tinh tế và phù hợp sẽ khiến <br />
              sản phẩm của bạn trở nên khác biệt.
            </div>
            <div class="footer__left--address">
              <p>Số 11, Phan Kế Bính, Quận 1, TP. Hồ Chí Minh</p>
              <p>(+84) 98 9596 913</p>
            </div>
            <div class="footer__left--social">
              <a href="#" class="icon fb"></a>
              <a href="#" class="icon mail"></a>
              <a href="#" class="icon skype"></a>
            </div>
          </div>
          <div class="footer__right col-md-6">
            <nav>
              <ul>
                <li>
                  <a href="#">Trang chủ</a>
                </li>
                <li>
                  <a href="#">Khoá học</a>
                </li>
                <li>
                  <a href="#">Thanh toán</a>
                </li>
                <li>
                  <a href="#">Điều khoản</a>
                </li>
              </ul>
            </nav>
            <a href="#" class="back-top">
              {" "}
              <span></span> Cuộn lên
            </a>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="container">
          <div class="copy-right">2020 Creative Front-End Dev</div>
          <div class="design">Được thiết kế và lập trình bởi CFD Team</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
