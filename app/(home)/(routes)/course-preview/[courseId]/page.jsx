"use client";

import { getCourseById } from "@/app/_services";
import React, { useEffect, useState } from "react";
import VideoPlayer from "../_components/VideoPlayer";
import CourseDetails from "../_components/CourseDetails";
import EnrollmentSection from "../_components/EnrollmentSection";
import OptionSection from "../_components/OptionSection";

function CoursePreview({ params }) {
  const [courseDetail, setCourseDetails] = useState([]);

  console.log(courseDetail);
  useEffect(() => {
    // console.log(params.courseId);
    params.courseId ? getCourse(params.courseId) : null;
  }, []);

  const getCourse = () => {
    getCourseById(params.courseId).then((res) => {
      setCourseDetails(res.courseList);
      // console.log(res.courseList);
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
            <EnrollmentSection courseDetail={courseDetail} />
          </div>
        </div>
      </div>
    )
  );
}

export default CoursePreview;
