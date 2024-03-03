import { useContext } from "react";
import { categories } from "../constants";
import { YoutubeContext } from "../context/youtubeContext";

const SideBar = () => {
  const { selectedCategory, setSelectedCategory } = useContext(YoutubeContext);
  return (
    <div className="flex flex-col p-2 md:px-4">
      {categories.map((item) => (
        <div onClick={() => setSelectedCategory(item)} key={item.name}>
          <div
            // If the category we print on the screen is selected, give it a background.
            style={{
              background: selectedCategory.name === item.name && "#5d5d5d",
            }}
            className="flex items-center gap-2 py-4 px-2 md:px-3 md:text-lg cursor-pointer rounded-md hover:bg-[#2d2d2d]"
          >
            <span className="max-sm:text-2xl">{item.icon}</span>
            <span className="max-sm:hidden">{item.name}</span>
          </div>

          {item.divider && <hr />}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
