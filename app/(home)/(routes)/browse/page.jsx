"use client";

import React, { useEffect, useState } from "react";
import CategoryFilter from "./_components/CategoryFilter";
import { getCourseList } from "../../../_services/index";
import CourseList from "./_components/CourseList";

function Browse() {
  const [courses, setCourses] = useState([]);
  const [courseOrg, setCourseOrg] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    getCourseList().then((res) => {
      console.log(res);
      setCourses(res.courseLists);
      setCourseOrg(res.courseLists);
    });
  };
  const filterCourse = (category) => {
    if (category === "all") {
      setCourses(courseOrg);
      return;
    }

    const filteredList = courseOrg.filter((course) => {
      return course.tag.includes(category);
    });

    setCourses(filteredList);
  };
  return (
    <div className="p-5">
      <CategoryFilter selectedCategory={(category) => filterCourse(category)} />
      {courses ? <CourseList courses={courses} /> : null}
    </div>
  );
}

export default Browse;
