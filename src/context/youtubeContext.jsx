import { createContext, useEffect, useState } from "react";
import { categories } from "../constants";
import { getData } from "../helpers/getData";

export const YoutubeContext = createContext();

// The application transfers the data held in the context
export function YoutubeProvider({ children }) {
  // keeps the selected category
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  // holds videos
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    if (
      selectedCategory.type === "home" ||
      selectedCategory.type === "trending"
    ) {
      // Using helper function and sending API request
      getData(`/${selectedCategory.type}`).then((res) =>
        setVideos(res.data.data)
      );
    }

    // if selected is categoy, send a request
    if (selectedCategory.type === "category") {
      getData(`/search?query=${selectedCategory.name}&type=video`).then((res) =>
        setVideos(res.data.data)
      );
    }
  }, [selectedCategory]);

  return (
    <YoutubeContext.Provider
      value={{ selectedCategory, setSelectedCategory, videos }}
    >
      {children}
    </YoutubeContext.Provider>
  );
}
