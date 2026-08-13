import { AnnouncementBar } from "@/src/components/customs/AnnouncementBar";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <>
      <AnnouncementBar />

      <Outlet />
    </>
  );
};
