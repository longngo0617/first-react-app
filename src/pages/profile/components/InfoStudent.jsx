const InfoStudent = () => {
  return (
    <div className="tab__content-1 tabct active" style={{ display: "block" }}>
      <form action="/" method="POST">
        <div className="field">
          <label>Họ và Tên</label>
          <input type="text" name="title" value="Tran Nghia" />
        </div>
        <div className="field">
          <label>Số điện thoại*</label>
          <input type="text" name="phone" value="0989596813" />
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
          <input type="text" name="facebook" value="https://facebook.com" />
        </div>
        <div className="field">
          <label>Skype</label>
          <input type="text" name="skype" value="trannghia2018" />
        </div>
        <div className="btn-register btn-save">LƯU LẠI</div>
      </form>
    </div>
  );
};

export default InfoStudent;
