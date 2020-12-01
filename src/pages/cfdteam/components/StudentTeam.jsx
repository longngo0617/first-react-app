const StudentTeam = ({ name, classes , image }) => {
  return (
    <div className="col-md-3 coreteam__student--item">
      <div className="wrap">
        <img src={image} alt="" />
      </div>
      <div className="text">
        <div className="name">{name}</div>
        <div className="class">{classes}</div>
      </div>
    </div>
  );
};

export default StudentTeam;
