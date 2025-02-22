import { Route, Routes } from "react-router-dom";
import MainLayout from "@/components/layouts/MainLayout";
import HomePage from "@/components/pages/HomePage";
import ProfilePage from "@/components/pages/ProfilePage";
import SignUpPage from "@/components/pages/SignUpPage";
import LoginPage from "@/components/pages/LoginPage";
import PreferencesPage from "@/components/pages/PreferencesPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Rutas sin layout */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />

      {/* Rutas con layout general */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="preferences" element={<PreferencesPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
