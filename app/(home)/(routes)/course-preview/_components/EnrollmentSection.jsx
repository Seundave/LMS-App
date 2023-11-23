import { EnrollCourse, PublishCourse } from "@/app/_services";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

function EnrollmentSection({ courseDetail, userCourse }) {
  const router = useRouter();
  const { user } = useUser();
  console.log(courseDetail);

  const enrollCourse = async () => {
    if (user) {
      await EnrollCourse(
        courseDetail.id,
        user?.primaryEmailAddress?.emailAddress
      ).then(async (res) => {
        console.log("EnrollCourseResp=>", res);
        console.log(res.createUserEnrollCourse.id);
        if (res) {
          await PublishCourse(res?.createUserEnrollCourse?.id).then(
            (result) => {
              console.log(result);
            }
          );
        }
      });
    } else {
      router.push("/sign-in");
    }
  };
  return (
    <div>
      {userCourse?.courseId ? (
        <div className="mt-5 border rounded-lg p-2 text-center">
          <h2 className="text-gray-500">
            Continue to Build Project, Access Source Code and Track your
            Progress for free!{" "}
          </h2>
          <button className="p-2 w-full bg-purple-500 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-700">
            Continue
          </button>
        </div>
      ) : null}
      {courseDetail.free && !userCourse?.courseId ? (
        <div className="mt-5 border rounded-lg p-2 text-center">
          <h2 className="text-gray-500">
            Learn and Build Project, Access Source Code and Track your Progress
            for free!{" "}
          </h2>
          <button
            onClick={() => enrollCourse()}
            className="p-2 w-full bg-purple-500 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-700"
          >
            Enroll Now
          </button>
        </div>
      ) : !userCourse?.courseId ? (
        <div className="mt-5 border rounded-lg p-2 text-center">
          <h2 className="text-gray-500">
            Buy this course, Source code and Track your Progress for free{" "}
          </h2>
          <button className="p-2 w-full bg-purple-500 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-700">
            Buy course for $1.99
          </button>
        </div>
      ) : null}
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
