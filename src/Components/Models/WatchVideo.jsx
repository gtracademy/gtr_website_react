import React, { useEffect, useState } from "react";
import { useSearch } from "../ContextApi/SearchContext";
import { useParams } from "react-router-dom";

const WatchVideo = ({ isOpen, onClose, videoUrl }) => {
  const { courses } = useSearch();
  const { slug } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (courses && courses.length > 0 && slug) {
      const matched = courses.find(
        (c) => c.courseUrl?.toLowerCase() === slug.toLowerCase()
      );
      setCourse(matched || null);
    }
  }, [courses, slug]);

  if (!isOpen) return null;

  const rawUrl =
    videoUrl ||
    course?.courseDemoVideo ||
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

  // ✅ Normalize YouTube URL to embed format
  let embedUrl = rawUrl;
  if (rawUrl.includes("watch?v=")) {
    embedUrl = rawUrl.replace("watch?v=", "embed/");
  } else if (rawUrl.includes("youtu.be/")) {
    embedUrl = rawUrl.replace("youtu.be/", "www.youtube.com/embed/");
  }
  const finalVideoUrl = `${embedUrl}?autoplay=1&rel=0`; // rel=0 → removes suggested videos

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[1000] transition-all duration-300"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl overflow-hidden w-[90%] md:w-[800px] transform transition-all duration-300 scale-100 hover:scale-[1.01]"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-100 bg-black/60 hover:bg-black p-2 rounded-full transition-all duration-200"
        >
          ✕
        </button>

        {/* Header (Optional) */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-3 px-5 text-lg font-semibold">
          {course?.courseTitle || "Course Demo Video"}
        </div>

        {/* Video Container */}
        <div className="w-full aspect-video bg-black">
          <iframe
            key={finalVideoUrl}
            width="100%"
            height="100%"
            src={finalVideoUrl}
            title="Course Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-b-2xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;
