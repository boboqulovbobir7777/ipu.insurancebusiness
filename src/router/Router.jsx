import { Routes, Route } from "react-router-dom";

import MainPage from "../pages/MainPage";
import PageResource from "../pages/PageResource";
import PageNotFound from "../pages/PageNotFound";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/:slug" element={<PageResource />} />
      <Route path="/error" element={<PageNotFound />} />
    </Routes>
  );
}
