import iconoFacebook from "../../assets/ICONO-FACEBOOK-BLANCO.svg";
import iconoInstagram from "../../assets/ICONO-INSTAGRAM-BLANCO.svg";
import iconoTiktok from "../../assets/ICONO-TIK TOK-BLANCO.svg";

export const AnnouncementBar = () => {
  return (
    <div className="bg-lila hidden h-8 grid-cols-[1fr_auto_1fr] items-center sm:grid">
      <p className="col-start-2 justify-self-center text-xs text-white">
        Tu dosis de K-pop directo a tu puerta - Envíos por pagar a todo Chile
      </p>

      <div className="col-start-3 flex h-full gap-1 justify-self-end py-1.5 pr-13">
        <a href="">
          <img src={iconoFacebook} alt="" className="h-full" />
        </a>
        <a href="">
          <img src={iconoInstagram} alt="" className="h-full" />
        </a>
        <a href="">
          <img src={iconoTiktok} alt="" className="h-full" />
        </a>
      </div>
    </div>
  );
};
