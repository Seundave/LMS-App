import { CompletedChapterContext } from "@/app/_context/CompletedChapterContext";
import { CheckCircle2 } from "lucide-react";
import React, { useContext } from "react";
import { markChaptersCompleted } from "./../../../../../_services/index";

function FullVideoPlayer({ userCourse, activeChapter }) {
  const { completedChapter, setCompletedChapter } = useContext(
    CompletedChapterContext
  );

  const isChapterCompleted = (chapterId) => {
    return completedChapter.find((item) => item.chapterId == chapterId);
  };

  const markChapterCompleted = async () => {
    if (!completedChapter?.length) {
      setCompletedChapter([]);
    }
    completedChapter
      ? setCompletedChapter([
          ...completedChapter,
          { chapterId: activeChapter?.chapterNumber + "" },
        ])
      : setCompletedChapter([{ chapterId: activeChapter?.chapterNumber + "" }]);

    await markChaptersCompleted(
      userCourse.id,
      activeChapter?.chapterNumber
    ).then((res) => {
      console.log(res);
    });
  };

  return (
    activeChapter && (
      <div className="p-5">
        <video
          key={activeChapter?.video?.url}
          width="1500"
          height="250"
          controls
          controlsList="nodownload"
        >
          <source src={activeChapter?.video?.url} type="video/mp4" />
        </video>
        <div className="p-5 border rounded-lg mt-5 flex justify-between items-center">
          <h2 className="text-[20px] font-medium">{activeChapter?.name}</h2>
          {!isChapterCompleted(activeChapter?.chapterNumber) ? (
            <button
              className="bg-purple-500 text-white p-2 px-5 rounded-lg flex gap-2 hover:bg-purple-800"
              onClick={() => markChapterCompleted()}
            >
              <CheckCircle2 /> <h2>Mark as completed</h2>
            </button>
          ) : (
            <button className="text-purple-600 border border-purple-600  p-2 px-5 rounded-lg flex gap-2 hover:bg-purple-100">
              <Close /> <h2>Mark Incompleted</h2>
            </button>
          )}
        </div>
      </div>
    )
  );
}

export default FullVideoPlayer;
