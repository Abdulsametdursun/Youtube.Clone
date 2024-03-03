import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../helpers/getData";
import Loading from "./Loading";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import StringArea from "./StringArea";
import millify from "millify";
import moment from "moment/moment";

const VideoInfo = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [channel, setChannel] = useState(null);

  const getInfos = async () => {
    // Id of the channel and video infos
    const detailRes = await getData(`/video/info?id=${id}`);
    // Accessing the detailed information of the channel using the channel id we received from the previous request
    const channelRes = await getData(
      `/channel/about?id=${detailRes.data.channelId}`
    );

    setDetail(detailRes.data);
    setChannel(channelRes.data);
  };

  useEffect(() => {
    setDetail(null);
    setChannel(null);
    getInfos();
  }, [id]);

  if (!detail || !channel) {
    return <Loading type={"detail"} />;
  }

  console.log(detail, channel);

  return (
    <>
      <h1 className="mt-3 text-xl font-bold">{detail.title}</h1>

      <div className="flex justify-between mt-3">
        <div className="flex items-center">
          <img className="rounded-full w-12 h-12" src={channel} />
          <div>
            <h4 className="font-bold">Title</h4>
            <p className="text-gray-400">SubscriberCount</p>
          </div>
          <button className="bg-white rounded-full text-black px-3 py-2 transition hover:bg-gray-400">
            Subscribe
          </button>
        </div>

        <div className="flex items-center rounded-full bg-gray-600 text-black ">
          <div className="flex items-center gap-3 py-2 px-4 border-r hover:bg-gray-600">
            <AiFillLike />
            <span>{Math.round(Math.random() * 100)}B</span>
          </div>
          <div className="py-2 px-4">
            <AiFillDislike />
          </div>
        </div>
      </div>

      <div className="bg-gray-600 rounded p-2 mt-4 cursor-pointer hover:bg-gray">
        <div className="flex gap-3">
          <p>{millify(detail.viewCount)} watched</p>
          <p>{moment(detail.publishDate).fromNow()}</p>
        </div>
        <StringArea text={detail.description} max={300} />
      </div>
    </>
  );
};

export default VideoInfo;
