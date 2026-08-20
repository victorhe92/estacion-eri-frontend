import iconoCarrito from "@/assets/Icono-Carrito-de-compra.svg";
import { cn } from "@/lib/utils";
import { Link } from "react-router";

interface Props {
  className?: string;
}

export const CartButton = ({ className }: Props) => {
  return (
    <Link to="/" className={cn("", className)}>
      <img src={iconoCarrito} alt="" className="h-10" />
    </Link>
  );
};
