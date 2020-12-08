import { useEffect,useState } from "react";
import Banner from "./components/Banner";
import SectionCourse from "./components/SectionCourse";
import Special from "./components/Special";
import Comment from "./components/Comment";
import Team from "./components/Team";
import Ready from "./components/Ready";
import { useAuth } from "../../hooks/useAuth";
import Api from "../../components/Api";

const Home = () => {
  let { user } = useAuth();
  let [course, setCourse] = useState([]);

  useEffect(() => {
    
    Api("rest/elearning_course", {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    })
      .get()
      .then((res) => {
        if(res.data){
          setCourse(JSON.stringify(res.data));
          console.log(course);
        }
      });
  }, []);

  return (
    <>
      <Banner />
      <SectionCourse />
      <Special />
      <Comment />
      <Team />
      <Ready />
    </>
  );
};

export default Home;
