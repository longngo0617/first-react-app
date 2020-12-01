import CourseCard from './../../../components/CourseCard';

const SectionCourse = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="course">
            <h2 className="title">Dự án</h2>
            <h2 className="type">học viên</h2>
            <div className="row">
              <CourseCard
                title="Furnitown"
                des="One of the best corporate fashion brands in Sydney"
                image="/img/img-1.jpg"
              />
              <CourseCard
                title="GMBOX"
                des="One of the best corporate fashion brands in Sydney"
                image="/img/img-2.jpg"
              />
              <CourseCard
                title="KYMCO"
                des="One of the best corporate fashion brands in Sydney"
                image="/img/img-3.jpg"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section related">
        <div className="container">
          <div className="course">
            <h2 className="title">Khoá học</h2>
            <h2 className="type">Liên quan</h2>
            <div className="row">
              <CourseCard
                title="Front-end căn bản"
                des="One of the best corporate fashion brands in Sydney"
                image="/img/img-7.jpg"
              />
              <CourseCard
                title="Front-end nâng cao"
                des="One of the best corporate fashion brands in Sydney"
                image="/img/img-8.jpg"
              />
              <CourseCard
                title="Laravel framework"
                des="One of the best corporate fashion brands in Sydney"
                image="/img/img-9.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionCourse;
