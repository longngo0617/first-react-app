import {Link} from 'react-router-dom'
const Page404 = () => {
  return (
    <>
      <section className="section page404">
        <div className="main-title">404</div>
        <p>Không tìm thấy trang</p>
        <Link to="/" className="btn btn-round">
          Trang chủ
        </Link>
      </section>
    </>
  );
};

export default Page404;
