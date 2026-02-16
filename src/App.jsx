import { Routes, Route, Navigate } from "react-router-dom";
import ReleasesListPage from "./pages/ReleasesListPage.jsx";
import ReleaseDetailsPage from "./pages/ReleaseDetailsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import HomePage from "./pages/HomePage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/releases" element={<ReleasesListPage />} />
      <Route path="/releases/:id" element={<ReleaseDetailsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
