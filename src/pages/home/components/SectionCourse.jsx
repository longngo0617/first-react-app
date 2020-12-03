import CourseCard from "./../../../components/CourseCard";
const SectionCourse = () => {
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
              <CourseCard
                title="Front-end căn bản"
                des="One of the best corporate fashion brands in Sydney"
                image="/img/img-1.jpg"
                param="1"
              />
              <CourseCard
                title="React JS"
                des="One of the best corporate fashion brands in Sydney"
                image="/img/img-2.jpg"
                param="2"
              />
              <CourseCard
                title="Animation"
                des="One of the best corporate fashion brands in Sydney"
                image="/img/img-3.jpg"
                param="3"
              />
              <CourseCard
                title="Scss,Grunt JS va bootstrap 4"
                des="One of the best corporate fashion brands in Sydney"
                image="/img/img-4.jpg"
                param="4"
              />
              <CourseCard
                title="UX/UI Design"
                des="One of the best corporate fashion brands in Sydney"
                image="/img/img-5.jpg"
                param="5"
              />
              <CourseCard
                title="Web Responsive"
                des="One of the best corporate fashion brands in Sydney"
                image="/img/img-6.jpg"
                param="6"
              />
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
              <CourseCard
                title="Front-end căn bản"
                des="One of the best corporate fashion brands in Sydney"
                image="/img/img-7.jpg"
                param="7"
              />
              <CourseCard
                title="Front-end nâng cao"
                des="One of the best corporate fashion brands in Sydney"
                image="/img/img-8.jpg"
                param="8"
              />
              <CourseCard
                title="Laravel framework"
                des="One of the best corporate fashion brands in Sydney"
                image="/img/img-9.jpg"
                param="9"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionCourse;
