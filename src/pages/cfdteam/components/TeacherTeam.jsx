const TeacherTeam = ({ name, job,image }) => {
  return (
    <div className="col-md-6 coreteam__teacher--item">
      <div className="wrap">
        <img src={image} alt="" />
      </div>
      <div className="text">
        <div className="name">{name}</div>
        <div className="job">{job}</div>
      </div>
    </div>
  );
};

export default TeacherTeam;
