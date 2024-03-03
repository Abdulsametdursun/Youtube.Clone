import { useContext } from "react";
import SideBar from "../components/SideBar";
import { YoutubeContext } from "../context/youtubeContext";
import Loading from "../components/Loading";
import VideoCard from "../components/VideoCard";

const Feed = () => {
  const { videos } = useContext(YoutubeContext);
  return (
    <div className="flex gap-3">
      <SideBar />
      <div className="videos">
        {!videos ? (
          <Loading type={"video"} />
        ) : (
          videos.map(
            (item, index) =>
              item.type === "video" && (
                <VideoCard video={item} key={item.videoID || index} />
              )
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
