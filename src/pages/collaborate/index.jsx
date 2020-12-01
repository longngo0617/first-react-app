import { useState } from "react";

const Collaborate = () => { 
    let [form,setForm] = useState({
        name: '',
        phone:'',
        email: '',
        website: '',
        title: '',
        content: '',
    });

    function inputChange(e) {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        });
    }
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
        if(form.title === '' || form.title == null)
        {
            console.log("Tieu de kh duoc bo trong");
            flag = false;
        }
        if(form.content === '' || form.content == null)
        {
            console.log("Noi dung kh duoc bo trong");
            flag = false;
        }
        if(flag)
        {
            console.log("Submit");
        }
    } 

  return (
    <>
      <section class="section register">
        <div class="container">
          <div class="course">
            <h2 class="title">liên hệ</h2>
            <h2 class="type">hợp tác cùng CFD</h2>
          </div>
          <div class="register__wrap">
            <form action="/" method="POST" class="register__form">
              <div class="field">
                <label>
                  Họ và Tên<span>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  onChange={inputChange}
                  value={form.name}
                  placeholder="Họ và tên bạn"
                />
              </div>
              <div class="field">
                <label>
                  Số điện thoại<span>*</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  onChange={inputChange}
                  value={form.phone}
                  placeholder="Số điện thoại"
                />
              </div>
              <div class="field">
                <label>
                  Email<span>*</span>
                </label>
                <input
                  type="text"
                  name="email"
                  onChange={inputChange}
                  value={form.email}
                  placeholder="Email của bạn"
                />
              </div>
              <div class="field">
                <label>Website</label>
                <input
                  type="text"
                  name="website"
                  onChange={inputChange}
                  value={form.website}
                  placeholder="Đường dẫn website https://"
                />
              </div>
              <div class="field">
                <label>
                  Tiêu đề <span>*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  onChange={inputChange}
                  value={form.title}
                  placeholder="Tiêu đề liên hệ"
                />
              </div>
              <div class="field">
                <label>
                  Nội dung <span>*</span>
                </label>
                <input
                  type="text"
                  name="content"
                  onChange={inputChange}
                  value={form.content}
                  style={{ height: "150px" }}
                />
              </div>
              <div onClick={handleSubmit} class="btn-register btn-save">GỬI TIN</div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Collaborate;
