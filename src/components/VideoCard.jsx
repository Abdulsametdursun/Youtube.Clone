import millify from "millify";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video, type }) => {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  const safeUrl = (thumbnails) =>
    thumbnails && thumbnails.length > 0 ? thumbnails[0].url : "";

  return (
    <div
      onClick={() => navigate(`/watch/${video.videoId}`)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`cursor-pointer ${type && "row"}`}
    >
      {/**Picture */}
      <div>
        <img
          className={`rounded-lg w-full h-full`}
          src={
            isHover && video.richThumbnail
              ? safeUrl(video.richThumbnail) // If mouse is on video, show GIF if available
              : safeUrl(video.thumbnail) // If mouse is not on video, show picture
          }
        />
      </div>

      {/**Details */}
      <div className="flex gap-4 mt-5">
        <img
          className={`w-14 h-14 rounded-full ${type && "hidden"}`}
          src={safeUrl(video.channelThumbnail)}
        />
        <div>
          <h4 className={`font-bold ${type && "truncate"}`}>{video.title}</h4>
          <p>{video.channelTitle}</p>
          <div className="flex gap-2">
            <p>{video.viewCount ? millify(video.viewCount) : "N/A"}</p>
            <p>{video.publishedTimeText || "Unknown"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
