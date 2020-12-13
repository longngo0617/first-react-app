import SectionCourse from "./components/SectionCourse";
import BannerCourse from "./components/BannerCourse";
import ContentCourse from "./components/ContentCourse";
import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { GraphQLClient } from "../../components/GraphQLClient";
const CourseDetails = () => {
  let [loading, setLoading] = useState(true);
  let [course, setCourse] = useState(null);
  let [relative, setRelative] = useState({});
  let routeMatch = useRouteMatch();
  useEffect(() => {
    GraphQLClient.query(
      `{
      elearning_course(_id: "${routeMatch.params.id}") {
        benefits
        cfd_teacher {
          title
          avatar
          description
          position
        }
        mentor {
          title
          avatar
          description
          position
        }
        close_time
        count_video
        course_status
        course_type
        khoa
        money
        _id
        thumbnail
        visibility
        title
        slug
        short_description
        required
        schedule
        content
        opening_time
        course_type
      }
      relative: elearning_courses(course_status: "sap-khai-giang", limit: 3) {
        data {
          title
          short_description
          _id
          thumbnail
          slug
          course_status
          cfd_teacher {
            title
            avatar
          }
        }
      }
    }
    `
    ).then((res) => {
      if (res && res.data) {
        setCourse(() => res.data.elearning_course);
        setRelative(() => res.data.relative.data);
        setLoading(false);
      }
    });
  }, [routeMatch.params.id]);
  if (loading) return <div>loading....</div>;
  else {
    return (
      <div>
        <BannerCourse course={course} />
        <ContentCourse course={course} />
        <SectionCourse course={relative} />
      </div>
    );
  }
};

export default CourseDetails;
