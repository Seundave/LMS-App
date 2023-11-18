import { Book } from "lucide-react";
import Image from "next/image";
import React from "react";

const CourseList = ({ courses }) => {
  console.log(courses);
  return (
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {courses.map((course, index) => (
        <div
          key={index}
          className="border rounded-lg p-2  cursor-pointer hover:border-purple-300"
        >
          <Image
            src={course.banner.url}
            alt={course.name}
            width={1000}
            height={500}
            className="rounded-lg"
          />
          <div className="mt-2">
            <h2 className="text-[18px] md:text-[16px] font-medium">
              {course.name}
            </h2>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <Book className="w-6 h-6 text-purple-600 rounded-full bg-purple-100 p-1" />
            <h2 className="text-[12px] text-gray-400">
              {course.totalChapters} Chapters
            </h2>
          </div>
          <div>
            <h2 className="mt-2 text-[14px]">
              {course.free ? " Free " : "Paid"}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
