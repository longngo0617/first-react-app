
import {useState} from 'react';
import {useLocation} from 'react-router-dom'
const Register = () => {
    let [form,setForm] = useState({
        name: '',
        phone: '',
        email: '',
        facebook: '',
        payment: '',
        note: '',
    });
    function useQuery() {
      return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    console.log(query.get("khoa-hoc"))
    
    function handleSubmit() {
        let flag=true;
        if(form.name ==='' || form.name ==null)
        {
            console.log("Ten khong duoc bo trong");
            flag=false;
        }
        if(!/(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(form.phone))
        {
            console.log("So dien thoai khong dung dinh dang");
            flag=false;
        }
        if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email))
        {
            console.log("Email kh dung dinh dang");
            flag=false;
        }
        if(form.facebook === '' || form.facebook == null || !/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(form.facebook))
        {
            console.log("Link facebook kh dung dinh dang");
            flag=false;
        }
        if(flag)
        {
            console.log("Submit");
        }
    } 
    
    function inputChange(e) {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        });
    }
  return (
    <section className="section register">
      <div className="container">
        <div className="course">
          <h2 className="title">đăng ký</h2>
          <h2 className="type">thực chiến front-end căn bản </h2>
        </div>
        <div className="register__wrap">
          <form action="/" method="POST" className="register__form">
            <div className="field">
              <label>
                Họ và Tên<span>*</span>
              </label>
              <input
                onChange={inputChange}
                type="text"
                name="name"
                value={form.name}
                placeholder="Họ và tên bạn"
              />
            </div>
            <div className="field">
              <label>
                Số điện thoại<span>*</span>
              </label>
              <input
                onChange={inputChange}
                type="text"
                name="phone"
                value={form.phone}
                placeholder="Số điện thoại"
              />
            </div>
            <div className="field">
              <label>
                Email<span>*</span>
              </label>
              <input
                onChange={inputChange}
                type="text"
                name="email"
                value={form.email}
                placeholder="Email của bạn"
              />
            </div>
            <div className="field">
              <label>
                URL Facebook<span>*</span>
              </label>
              <input
                onChange={inputChange}
                type="text"
                name="facebook"
                value={form.facebook}
                placeholder="https://facebook.com"
              />
            </div>
            <div className="field">
              <label>Hình thức thanh toán</label>
              <input
                onChange={inputChange}
                type="text"
                name="payment"
                value={form.payment}
                placeholder="Chuyển khoản"
              />
            </div>
            <div className="field">
              <label>Ý kiến cá nhân</label>
              <input
                onChange={inputChange}
                type="text"
                name="note"
                value={form.note}
                placeholder="Định hướng và mong muốn của bạn"
              />
            </div>
            <div onClick={handleSubmit} className="btn-register btn-save">ĐĂNG KÝ</div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
