import {useState} from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';
const SignIn = () => {

  let {user,setUser} = useAuth();
  let {data,errors,inputChange,Submit} = useForm({
    email: "",
  },
  {
    validate: {
      email: {
        required: true,
        pattern: "email",
      },
    },
    message: {
      email: {
        required:'Tai khoan khong dung',
        pattern :'Email không đúng định dạng'
      },
    }
  })

  function handleSubmit() {
    let er = Submit();
    if(!er){
      setUser({
        ...user,
        name:'Ngo Thanh Long',
        login:true
      })
    }
  }

  return (
    <div className="section login">
      <div className="wrap">
        <form id="login">
          <div className="ct_login">
            <h2 className="title">Đăng nhập</h2>
            <input
              name="email"
              type="text"
              onChange={inputChange}
              value={data.account}
              placeholder="Email / Số điện thoại"
            />
            {errors.email && <p className="input-errors">{errors.email}</p>}
            <input
              name="password"
              onChange={inputChange}
              type="password"
              value={data.password}
              placeholder="Mật khẩu"
            />
            <p className="mess-error" id="message_login"></p>
            <div className="remember">
              <label className="btn-remember">
                <div>
                  <input type="checkbox" />
                </div>
                <p>Nhớ mật khẩu</p>
              </label>
              <a
                href="#"
                className="forget btn-open-popup"
                data-id="reset-password"
              >
                Quên mật khẩu?
              </a>
            </div>
            <div onClick={handleSubmit} className="btn btn-login btn-register">
              đăng nhập
            </div>
            <div className="text-register" style={{ fontWeight: 700 }}>
              <strong>Hoặc đăng nhập bằng</strong>
            </div>
            <div>
              <div className="btn btn-login btn-google " id="googleSignIn">
                <img src="img/google.svg" alt="" />
                Google
              </div>
              <p className="mess-error" id="message_login_by_g"></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
