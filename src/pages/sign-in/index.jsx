import {useState} from 'react';
const SignIn = () => {
  let [form, setForm] = useState({
    account: "",
    password: "",
  });

  function handleSubmit() {
    let flag = true;
    if (form.account === "" || form.account == null) {
      console.log("Ten khong duoc bo trong");
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
    <div className="section login">
      <div className="wrap">
        <form id="login">
          <div className="ct_login">
            <h2 className="title">Đăng nhập</h2>
            <input
              name="email"
              type="text"
              onChange={inputChange}
              value={form.account}
              placeholder="Email / Số điện thoại"
            />
            <input
              name="password"
              onChange={inputChange}
              type="password"
              value={form.password}
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
