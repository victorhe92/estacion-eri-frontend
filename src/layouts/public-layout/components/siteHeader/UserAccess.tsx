import iconoSesion from "@/assets/ICONO-INICIAR-SESION.svg";
import { cn } from "@/lib/utils";
import { Link } from "react-router";

interface Props {
  className?: string;
}

export const UserAccess = ({ className }: Props) => {
  return (
    <Link
      to="/login"
      className={cn(
        "border-r-rosado flex items-center gap-2 border-r-2 pr-5",
        className,
      )}
    >
      <img src={iconoSesion} alt="" className="h-10" />
      <p className="text-plomo text-sm">Iniciar sesión</p>
    </Link>
  );
};
