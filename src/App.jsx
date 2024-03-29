import { BrowserRouter, Route, Routes } from "react-router-dom"; // Corrected `Routers` to `Routes`
import Feed from "./pages/Feed";
import VideoDetail from "./pages/VideoDetail";
import SearchResults from "./pages/SearchResults";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/watch/:id" element={<VideoDetail />} />
        <Route path="/results" element={<SearchResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
