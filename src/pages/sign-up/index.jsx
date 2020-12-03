import { useState } from "react";

const SignUp = () => {
  let [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    repassword: "",
  });

  function handleSubmit() {
    let flag = true;
    if (form.name === "" || form.name == null) {
      console.log("Ten khong duoc bo trong");
      flag = false;
    }
    if (!/(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(form.phone)) {
      console.log("So dien thoai khong dung dinh dang");
      flag = false;
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      console.log("Email kh dung dinh dang");
      flag = false;
    }
    if (flag) {
      console.log("Submit");
    }
  }
  function inputChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div className="section sign-up">
      <div className="wrap">
        <form id="login">
          <div className="ct_login">
            <h2 className="title">Đăng Ký</h2>
            <input
              name="name"
              type="text"
              onChange={inputChange}
              value={form.name}
              placeholder="Họ và tên"
            />
            <input
              name="phone"
              type="text"
              onChange={inputChange}
              value={form.phone}
              placeholder="Số điện thoại"
            />
            <input
              name="email"
              type="email"
              onChange={inputChange}
              value={form.email}
              placeholder="Email"
            />
            <input
              name="password"
              type="password"
              onChange={inputChange}
              value={form.password}
              placeholder="Mật khẩu"
            />
            <input
              name="repassword"
              type="password"
              onChange={inputChange}
              value={form.repassword}
              placeholder="Xác nhận mật khẩu"
            />
            <p className="mess-error" id="message_login"></p>
            <div onClick={handleSubmit} className="btn btn-login btn-register">đăng ký</div>
            <div className="text-register" style={{ fontWeight: 700 }}>
              <strong>Hoặc đăng ký bằng</strong>
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

export default SignUp;
