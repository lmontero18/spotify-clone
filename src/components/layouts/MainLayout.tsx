import { Outlet } from "react-router-dom";
import Sidebar from "@/components/layouts/SidebarLayout";
import Header from "@/components/layouts/HeaderLayout";
import Player from "@/components/layouts/PlayerLayout";

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1  overflow-auto p-4">
          <Outlet />
          {/* Aquí se renderizan las páginas (HomePage, ProfilePage, etc.) */}
        </main>
      </div>
      <Player />
    </div>
  );
};

export default MainLayout;
