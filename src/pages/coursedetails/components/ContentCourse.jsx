import AccordionItem from "./../../../components/AccordionItem";
import { Teacher } from "./Teacher";
const ContentCourse = ({course}) => {
  let teacher = course.cfd_teacher;
  return (
    <section className="content__course">
      <div className="container">
        <div className="info__teach">{course.long_description}</div>
        <div className="info__video">
          <h2 className="title">giới thiệu về khóa học</h2>
          <div
            className="video"
            style={{ backgroundImage: "url(/img/video.jpg)" }}
          >
            <div className="btn-play">
              <svg
                width="70"
                height="70"
                viewBox="0 0 79 78"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="39.4761"
                  cy="38.9106"
                  rx="39.4673"
                  ry="38.8686"
                  fill="#F4F7F6"
                />
                <path
                  d="M49.3438 39.2343L35.0369 47.3691V31.0995L49.3438 39.2343Z"
                  fill="#49C5B6"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="info__course">
          <h2 className="title">nội dung khóa học</h2>
          {course.content.map((e, i) => (
            <AccordionItem
              key={i}
              title={e.title}
              des={`Ngày ${i + 1}`}
              info={e.content}
            />
          ))}
        </div>
        <div className="required">
          <h2 className="title">yêu cầu cần có</h2>
          <div className="row row-check">
            {course.required.map((e, i) => (
              <div class="col-md-6" key={i}>
                {e.content}
              </div>
            ))}
          </div>
          <h2 className="title">hình thức học</h2>
          <div className="row row-check">
            {course.benefits.map((e, i) => (
              <div class="col-md-6" key={i}>
                {e.content}
              </div>
            ))}
          </div>
        </div>
        <div className="date-study">
          <h2 className="title">
            lịch học
            <span>
              *Lịch học và thời gian có thể thống nhất lại theo số động học
              viên.
            </span>
          </h2>
          <p style={{ textAlign: "left" }}>
            <strong>Ngày bắt đầu: </strong> {course.opening_time} <br />
            <strong>Thời gian học: </strong> {course.schedule}
          </p>
        </div>
        <div className="teacher">
          <h2 className="title">Người dạy</h2>
          {<Teacher {...teacher} />}
          {course.mentor.length !== 0 && <h2 className="title">Người hướng dẫn</h2>}
          {course.mentor.length !== 0 &&  course.mentor.map((e, i) => <Teacher key={i} {...e} />)}
        </div>
        <div className="action">
          <div className="action-wrap">
            <div className="member">
              <img src="/img/customer.svg" alt="" />
              <span>{course.number_student_default}bạn đã đăng ký</span>
            </div>
            <div className="btn btn-round">đăng ký</div>
          </div>
          <div className="btn btn-continue btn-share">
            <img src="/img/facebook-app-symbol.svg" alt="" />
            <span>Chia sẻ</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentCourse;
