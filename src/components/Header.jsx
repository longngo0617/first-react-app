import React,{useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import { useAuth } from '../hooks/useAuth';

const Header = () => {
  let[menuState,setMenuState] = useState(false);
  let {user} =useAuth();
  const body = document.getElementsByTagName("body")[0];
  
  useEffect(() => {
    if(!menuState)
    {
      document.getElementsByTagName("main")[0].style.marginLeft = "0";
      body.removeAttribute("style");
      body.classList.remove("menu-is-show");
    }
    else {
      document.getElementsByTagName("main")[0].style.marginLeft = "250px";
      body.style.overflow = "hidden";
      body.classList.add("menu-is-show");
    }
  }, [menuState])

  
  function toggleMenu() {
    setMenuState(!menuState) 
  }
  function linkChange(){
    body.classList.toggle("menu-is-show");
    document.getElementsByTagName("main")[0].style.marginLeft = "0";
    body.removeAttribute("style");
    setMenuState(!menuState);
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
          {
            user._id ? <div>{user.email}</div> :
            <div className="user">
            <Link  to="/sign-in" className="btn btn-signin">
              Đăng nhập
            </Link>
            <Link  to="/sign-up" className="btn btn-register">
              Đăng ký
            </Link>
          </div>
          }
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
