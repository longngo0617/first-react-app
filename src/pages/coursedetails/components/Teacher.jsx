const Teacher = ({ avatar, title, position, description, website }) => {
  return (
    <div className="teacher__info" style={{ paddingTop: "30px" }}>
      <div className="avatar">
        <img src={avatar.link} alt="" style={{ minHeight: "100%" }} />
      </div>
      <div className="info">
        <div className="name">{title}</div>
        <div className="title">{position}</div>
        <p
          className="intro"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
        {website && (
          <p>
            <strong>Website:</strong>{" "}
            <a href={website} target="_blank">
              {website}
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export { Teacher };
