"use client";

import { getCourseById } from "@/app/_services";
import React, { useEffect, useState } from "react";
import VideoPlayer from "../_components/VideoPlayer";
import CourseDetails from "../_components/CourseDetails";
import EnrollmentSection from "../_components/EnrollmentSection";
import OptionSection from "../_components/OptionSection";
import { useUser } from "@clerk/nextjs";

function CoursePreview({ params }) {
  const [courseDetail, setCourseDetails] = useState([]);
  const [userCourse, setUserCourse] = useState([]);
  
  const { user } = useUser();

  useEffect(() => {
    params.courseId ? getCourse(params.courseId) : null;
  }, [user]);

  const getCourse = () => {
    getCourseById(
      params.courseId,
      user?.primaryEmailAddress?.emailAddress
    ).then((res) => {
      setCourseDetails(res.courseList);
      setUserCourse(res?.userEnrollCourses[0])
      console.log(res);
    });
  };
  return (
    courseDetail?.name && (
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col-span-2">
            {courseDetail?.chapter[0] ? (
              <VideoPlayer videoUrl={courseDetail?.chapter[0]?.video.url} />
            ) : null}
            <CourseDetails courseDetail={courseDetail} />
          </div>
          <div className="mt-5 md:mt-0">
            <OptionSection />
            <EnrollmentSection
              courseDetail={courseDetail}
              userCourse={userCourse}
            />
          </div>
        </div>
      </div>
    )
  );
}

export default CoursePreview;
