import React from "react";

function EnrollmentSection({ courseDetail }) {
  return (
    <div>
      {courseDetail.free ? (
        <div className="mt-5 border rounded-lg p-2 text-center">
          <h2 className="text-gray-500">
            Learn and Build Project, Access Source Code and Track your Progress
            for free!{" "}
          </h2>
          <button className="p-2 w-full bg-purple-500 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-700">
            Enroll Now
          </button>
        </div>
      ) : (
        <div className="mt-5 border rounded-lg p-2 text-center">
          <h2 className="text-gray-500">
            Buy this course, Source code and Track your Progress for free{" "}
          </h2>
          <button className="p-2 w-full bg-purple-500 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-700">
            Buy course for $1.99
          </button>
        </div>
      )}
      <div className="mt-5 border rounded-lg p-2 text-center">
        <h2 className="text-gray-500">
          Buy Monthly membership and get access to all course, Source code and
          Track your Progress{" "}
        </h2>
        <button className="p-2 w-full bg-purple-500 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-700">
          Buy Membership $4.99/Month
        </button>
      </div>
    </div>
  );
}

export default EnrollmentSection;
