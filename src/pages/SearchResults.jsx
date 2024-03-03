import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getData } from "../helpers/getData";
import SideBar from "../components/SideBar";
import Loading from "../components/Loading";
import VideoCard from "../components/VideoCard";

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [results, setResults] = useState(null);

  // Accessing the value of the search query parameter
  const query = searchParams.get("search_query");

  useEffect(() => {
    getData(`/search?query=${query}`).then((res) => setResults(res.data.data));
  }, [query]);

  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col gap-5 px-4">
        <h2>Results for {query}</h2>
        {!results ? (
          <Loading type={"video"} />
        ) : (
          results.map((item) => {
            return item.type === "video" ? (
              <VideoCard type={"test"} key={item.id} video={item} />
            ) : null;
          })
        )}
      </div>
    </div>
  );
};

export default SearchResults;
