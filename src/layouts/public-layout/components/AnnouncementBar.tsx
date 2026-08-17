import { cn } from "@/lib/utils";
import iconoFacebook from "@/assets/ICONO-FACEBOOK-BLANCO.svg";
import iconoInstagram from "@/assets/ICONO-INSTAGRAM-BLANCO.svg";
import iconoTiktok from "@/assets/ICONO-TIK TOK-BLANCO.svg";

interface Props {
  texto: string;
  linkInstagram?: string;
  linkFacebook?: string;
  linkTiktok?: string;
}

export const AnnouncementBar = ({
  texto,
  linkFacebook,
  linkInstagram,
  linkTiktok,
}: Props) => {
  return (
    <div className="bg-lila hidden h-8 grid-cols-[1fr_auto_1fr] items-center sm:grid">
      <p className="col-start-2 justify-self-center text-xs font-semibold text-white">
        {texto}
      </p>

      <div className="col-start-3 flex h-full gap-1 justify-self-end py-1.5 pr-13">
        {}
        <a
          href={linkFacebook}
          target="_blank"
          className={cn(!linkFacebook && "hidden")}
        >
          <img src={iconoFacebook} alt="" className="h-full" />
        </a>
        <a
          href={linkInstagram}
          target="_blank"
          className={cn(!linkInstagram && "hidden")}
        >
          <img src={iconoInstagram} alt="" className="h-full" />
        </a>
        <a
          href={linkTiktok}
          target="_blank"
          className={cn(!linkTiktok && "hidden")}
        >
          <img src={iconoTiktok} alt="" className="h-full" />
        </a>
      </div>
    </div>
  );
};
