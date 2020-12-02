const { default: ProjectItem } = require("./components/ProjectItem")

const Project = () => {
  return (
    <>
      <section className="section project">
        <div className="container">
          <div className="course">
            <h2 className="type">dự án</h2>
            <h2 className="title">
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
              <br />
              aliquam tincidunt elementum sem non luctus
            </h2>
          </div>
          <div className="project__wrap">
            <div className="row">
                <ProjectItem
                    image="/img/project-1.jpg"
                    name="furnitown"
                    owner="Hoàn thành với Trần Nghĩa"
                />
                <ProjectItem
                    image="/img/project-2.jpg"
                    name="kymco"
                    owner="Hoàn thành với Huỳnh Tiến Tài"
                />
                <ProjectItem
                    image="/img/project-3.jpg"
                    name="gboxmb"
                    owner="Hoàn thành với Nguyễn Văn Tuấn"
                />
                <ProjectItem
                    image="/img/project-4.jpg"
                    name="furnitown"
                    owner="Hoàn thành với Trần Nghĩa"
                />
                <ProjectItem
                    image="/img/project-5.jpg"
                    name="wooder"
                    owner="Hoàn thành với Nguyễn Đức Huy "
                />
                <ProjectItem
                    image="/img/project-6.jpg"
                    name="furnitown"
                    owner="Hoàn thành với Trần Nghĩa"
                />
                <ProjectItem
                    image="/img/project-7.jpg"
                    name="gboxmb"
                    owner="Hoàn thành với Trần Nghĩa"
                />
                <ProjectItem
                    image="/img/project-8.jpg"
                    name="wooder"
                    owner="Hoàn thành với Trần Nghĩa"
                />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
