import CourseCard from './../../../components/CourseCard';


const ProjectStudent = () => {
  return (
    <div className="tab__content-3 tabct">
      <div className="list__project">
            <CourseCard
                tile="Furnitown"
                des ="Dự án hoàn thành trong khóa CFD1 Offline của CFD Team."
                image ="/img/img-project.jpg"
            />
            <CourseCard
                tile="GMBOX"
                des ="Dự án hoàn thành trong khóa CFD1 Offline của CFD Team."
                image ="/img/img-project.jpg"
            />
            <CourseCard
                tile="GMBOX"
                des ="Dự án hoàn thành trong khóa CFD1 Offline của CFD Team."
                image ="/img/img-project.jpg"
            />
      </div>
      <div className="upload">
        <button type="button" className="btn btn-upload">
          <img src="img/upload.svg" alt="" />
          TẢI LÊN
        </button>
      </div>
    </div>
  );
};

export default ProjectStudent;
