import { useState } from "react";

const InfoStudent = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  let [form, setForm] = useState({
    name: "",
    phone: "",
    facebook: "",
    skype: "",
  });

  function inputChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
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
    if (form.skype === "" || form.skype == null) {
      console.log("Skype khong hop le ");
      flag = false;
    }
    if(form.facebook === '' || form.facebook == null || !/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(form.facebook))
    {
        console.log("Link facebook kh dung dinh dang");
        flag=false;
    }
    if (flag) {
      console.log("Submit");
    }
  }
  return (
    <div className="tab__content-1 tabct">
      <form action="/" method="POST">
        <div className="field">
          <label>Họ và Tên</label>
          <input 
            type="text" 
            onChange={inputChange}
            name="name" 
            value={form.name} />
        </div>
        <div className="field">
          <label>Số điện thoại*</label>
          <input 
            type="text" 
            onChange={inputChange}
            name="phone" 
            value={form.phone} />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            disabled
            value="trannghia2018@gmail.com"
          />
        </div>
        <div className="field">
          <label>Facebook</label>
          <input 
            type="text" 
            onChange={inputChange}
            name="facebook" 
            value={form.facebook} />
        </div>
        <div className="field">
          <label>Skype</label>
          <input 
            type="text" 
            onChange={inputChange}
            name="skype" 
            value={form.skype} />
        </div>
        <div onClick={handleSubmit} className="btn-register btn-save">LƯU LẠI</div>
      </form>
    </div>
  );
};

export default InfoStudent;
