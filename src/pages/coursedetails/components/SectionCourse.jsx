import CourseCard from "./../../../components/CourseCard";
const SectionCourse = ({ course }) => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="course">
            <h2 className="title">Khoá học</h2>
            <h2 className="type">Liên quan</h2>
            <div className="row">
              {course.map((e, i) => (
                <CourseCard key={i} {...e} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionCourse;
