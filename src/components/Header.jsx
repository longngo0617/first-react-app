import { Link } from "react-router-dom";

const Header = () => {
  
  const body = document.getElementsByTagName("body")[0];
  function toggleMenu() { 
    body.classList.toggle("menu-is-show");
    if (body.classList.contains("menu-is-show")) {
      document.getElementsByTagName("main")[0].style.marginLeft = "250px";
      body.style.overflow = "hidden";
    } else {
      document.getElementsByTagName("main")[0].style.marginLeft = "0";
      body.removeAttribute("style");
    }
  }
  function linkChange(){
    body.classList.toggle("menu-is-show");
    document.getElementsByTagName("main")[0].style.marginLeft = "0";
    body.removeAttribute("style");
  }

  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="menu" onClick={toggleMenu}>
            <div className="burger">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="text">Menu</div>
          </div>
          <Link  to="/" className="logo">
            <img src="/img/logo.svg" alt="black" />
          </Link>
          <div className="user">
            <Link  to="/sign-in" className="btn btn-signin">
              Đăng nhập
            </Link>
            <Link  to="/sign-up" className="btn btn-register">
              Đăng ký
            </Link>
          </div>
        </div>
      </header>
      <nav className="nav">
        <ul>
          <li>
            <Link onClick={linkChange} to="/">Trang chủ</Link>
          </li>
          <li>
            <Link onClick={linkChange} to="/chi-tiet-khoa-hoc">Khóa học</Link>
          </li>
          <li>
            <Link onClick={linkChange} to="/cfd-team">CFD Team</Link>
          </li>
          <li>
            <Link onClick={linkChange} to="/profile">Profile</Link>
          </li>
          <li>
            <Link onClick={linkChange} to="/hop-tac">Hợp tác</Link>
          </li>
        </ul>
      </nav>
      <div className="overlay_nav"></div>
    </>
  );
};

export default Header;
