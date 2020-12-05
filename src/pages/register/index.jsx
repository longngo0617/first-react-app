import { useForm } from "../../hooks/useForm";

const Register = () => {
  let { data, errors, inputChange, Submit } = useForm(
    {
      name: "",
      phone: "",
      email: "",
      facebook: "",
      payment: "",
      note: "",
    },
    {
      validate: {
        name: {
          required: true,
        },
        email: {
          required: true,
          pattern: "email",
        },
        phone: {
          required: true,
          pattern: "phone",
        },
        facebook: {
          required: true,
          pattern: "url",
        },
      },
      message: {
        name: {
          required: "Họ tên là bắt buộc",
        },
        phone: {
          required: "Số điện thoại là bắt buộc",
          pattern: "Số điện thoại không đúng định dạng",
        },
        email: {
          required: "Email là bắt buộc",
          pattern: "Email không đúng định dạng",
        },
        facebook: {
          required: "Facebook là bắt buộc",
          pattern: "Link Facebook không đúng định dạng",
        },
      },
    }
  );
  function handleSubmit() {
    let er = Submit();
    if (!er) {
      console.log("call ajax");
    }
  }
  return (
    <section className="section register">
      <div className="container">
        <div className="course">
          <h2 className="title">đăng ký</h2>
          <h2 className="type">thực chiến front-end căn bản </h2>
        </div>
        <div className="register__wrap">
          <form
            action="/"
            method="POST"
            className="register__form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className="field">
              <label>
                Họ và Tên<span>*</span>
              </label>
              <input
                onChange={inputChange}
                type="text"
                name="name"
                value={data.name}
                placeholder="Họ và tên bạn"
              />
              {errors.name && <p className="input-errors">{errors.name}</p>}
            </div>
            <div className="field">
              <label>
                Số điện thoại<span>*</span>
              </label>
              <input
                onChange={inputChange}
                type="text"
                name="phone"
                value={data.phone}
                placeholder="Số điện thoại"
              />
              {errors.phone && <p className="input-errors">{errors.phone}</p>}
            </div>
            <div className="field">
              <label>
                Email<span>*</span>
              </label>
              <input
                onChange={inputChange}
                type="text"
                name="email"
                value={data.email}
                placeholder="Email của bạn"
              />
              {errors.email && <p className="input-errors">{errors.email}</p>}
            </div>
            <div className="field">
              <label>
                URL Facebook<span>*</span>
              </label>
              <input
                onChange={inputChange}
                type="text"
                name="facebook"
                value={data.facebook}
                placeholder="https://facebook.com"
              />
              {errors.facebook && (
                <p className="input-errors">{errors.facebook}</p>
              )}
            </div>
            <div className="field">
              <label>Hình thức thanh toán</label>
              <input
                onChange={inputChange}
                type="text"
                name="payment"
                value={data.payment}
                placeholder="Chuyển khoản"
              />
            </div>
            <div className="field">
              <label>Ý kiến cá nhân</label>
              <input
                onChange={inputChange}
                type="text"
                name="note"
                value={data.note}
                placeholder="Định hướng và mong muốn của bạn"
              />
            </div>
            <button type="submit" className="btn-register btn-save">
              ĐĂNG KÝ
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
