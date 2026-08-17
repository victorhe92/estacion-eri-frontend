import { AnnouncementBar } from "@/layouts/public-layout/components/AnnouncementBar";
import { Outlet } from "react-router";
import { SiteHeader } from "./components/siteHeader/SiteHeader";

export const PublicLayout = () => {
  return (
    <>
      <AnnouncementBar
        texto="Tu dosis de K-pop directo a tu puerta - Envíos por pagar a todo Chile"
        linkInstagram="http://instagram.com/estacion_eri"
        linkFacebook="http://www.facebook.com/estacion_eri"
        linkTiktok="https://www.tiktok.com/@estacion_eri"
      />

      <SiteHeader />
      <Outlet />
    </>
  );
};
