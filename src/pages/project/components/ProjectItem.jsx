const ProjectItem = ({image,name,owner}) => {
  return (
    <div className="col-md-6 project__item">
      <a href="#" className="wrap">
        <img src={image} alt="" />
      </a>
      <div className="text">
        <div className="name">{name}</div>
        <div className="owner">{owner}</div>
      </div>
    </div>
  );
};

export default ProjectItem;
