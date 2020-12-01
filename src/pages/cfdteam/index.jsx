import TeacherTeam from './components/TeacherTeam';
import StudentTeam from './components/StudentTeam';

const CFDTeam = () => {
  return (
    <>
      <section className="section coreteam">
        <div className="container">
          <div className="course">
            <h2 className="type">CFD TEAM</h2>
            <h2 className="title">
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
              <br />
              aliquam tincidunt elementum sem non luctus
            </h2>
          </div>
          <div className="coreteam__teacher">
            <div className="row">
                <TeacherTeam
                    name ="trần nghĩa"
                    job ="Founder & Creative Front-End Developer"
                    image="/img/teacher-1.jpg"
                />
                <TeacherTeam
                    name ="đặng thuyền vương"
                    job ="Co-Founder & Fullstack Developer"
                    image="/img/teacher-2.jpg"
                />
                <TeacherTeam
                    name ="đặng thuyền quân"
                    job ="Co-Founder & Backend Developer"
                    image="/img/teacher-4.jpg"
                />
                <TeacherTeam
                    name ="nguyễn đức huy"
                    job ="Co-Founder & Front-End Developer"
                    image="/img/teacher-3.jpg"
                />
            </div>
          </div>
          <div className="coreteam__student">
            <div className="row">
                <StudentTeam
                    name="Diệp anh thy"
                    classes="CFD1-Offline"
                    image ="/img/student-1.jpg"
                />
                <StudentTeam
                    name="Huynh Tien Tai"
                    classes="CFD1-Offline"
                    image ="/img/student-2.jpg"
                />
                <StudentTeam
                    name="Diệp anh thy"
                    classes="CFD1-Offline"
                    image ="/img/student-3.jpg"
                />
                <StudentTeam
                    name="Diệp anh thy"
                    classes="CFD1-Offline"
                    image ="/img/student-4.jpg"
                />
                <StudentTeam
                    name="Diệp anh thy"
                    classes="CFD1-Offline"
                    image ="/img/student-1.jpg"
                />
                <StudentTeam
                    name="Diệp anh thy"
                    classes="CFD1-Offline"
                    image ="/img/student-5.jpg"
                />
                <StudentTeam
                    name="Diệp anh thy"
                    classes="CFD1-Offline"
                    image ="/img/student-4.jpg"
                />
                <StudentTeam
                    name="Diệp anh thy"
                    classes="CFD1-Offline"
                    image ="/img/student-5.jpg"
                />
                <StudentTeam
                    name="Diệp anh thy"
                    classes="CFD1-Offline"
                    image ="/img/student-2.jpg"
                />
                <StudentTeam
                    name="Diệp anh thy"
                    classes="CFD1-Offline"
                    image ="/img/student-1.jpg"
                />
                <StudentTeam
                    name="Diệp anh thy"
                    classes="CFD1-Offline"
                    image ="/img/student-1.jpg"
                />
                <StudentTeam
                    name="Diệp anh thy"
                    classes="CFD1-Offline"
                    image ="/img/student-1.jpg"
                />
                <StudentTeam
                    name="Diệp anh thy"
                    classes="CFD1-Offline"
                    image ="/img/student-1.jpg"
                />
                <StudentTeam
                    name="Diệp anh thy"
                    classes="CFD1-Offline"
                    image ="/img/student-1.jpg"
                />
                <StudentTeam
                    name="Diệp anh thy"
                    classes="CFD1-Offline"
                    image ="/img/student-1.jpg"
                />
                <StudentTeam
                    name="Diệp anh thy"
                    classes="CFD1-Offline"
                    image ="/img/student-1.jpg"
                />
                
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CFDTeam;
