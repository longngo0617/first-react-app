import CourseCard from "./../../../components/CourseCard";
const SectionCourse = ({ course }) => {
  let courseOffline = course.filter(cr=>cr.course_type==='offline');
  let courseOnline = course.filter(cr=>cr.course_type ==='online');
  courseOffline = courseOffline.slice(0,6);
  return (
    <>
      <section className="section online">
        <div className="container">
          <div className="introduce">
            The readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
          </div>
          <div className="course">
            <h2 className="title">Khoá học</h2>
            <h2 className="type">online</h2>
            <div className="row">
              {courseOnline.map((course,index) => (
                <CourseCard
                  key={index}
                  { ...course }
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section offline">
        <div className="container">
          <div className="course">
            <h2 className="title">Khoá học</h2>
            <h2 className="type">offline</h2>
            <div className="row">
            {courseOffline.map((course,index) => (
                <CourseCard
                  key={index}
                  {...course}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionCourse;
