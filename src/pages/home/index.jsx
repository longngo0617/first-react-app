import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import SectionCourse from "./components/SectionCourse";
import Special from "./components/Special";
import Comment from "./components/Comment";
import Team from "./components/Team";
import Ready from "./components/Ready";
import { useAuth } from "../../hooks/useAuth";
import Api from "../../components/Api";

const Home = () => {
  const { user } = useAuth();
  let [course, setCourse] = useState([]);
  useEffect(() => {
    if (course.length === 0) {
      Api("rest/elearning_course", {
        headerss: {  
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
        .get()
        .then((res) => {
          if (res && res.data) {
            setCourse(res.data);
          }
        });
    }
  }, []);
  return (
    <>
      <Banner />
      <SectionCourse course={course} />
      <Special />
      <Comment />
      <Team />
      <Ready />
    </>
  );
};

export default Home;
