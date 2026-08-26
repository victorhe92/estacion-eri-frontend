import logo from "@/assets/LOGOTIPO-ESTACIÓN ERI.svg";
import { CartButton } from "./CartButton";
import { MainNav } from "./MainNav";
import { SearchBar } from "./SearchBar";
import { UserAccess } from "./UserAccess";
import { Link } from "react-router";

export const SiteHeader = () => {
  return (
    <div className="grid grid-cols-[auto_1fr_auto_auto] grid-rows-[1f_auto] gap-5">
      <Link to={"/"} className="pl-10">
        <img src={logo} alt="Logotipo estación eri" className="mt-5 h-25" />
      </Link>
      <SearchBar className="mb-4 w-[80%] max-w-1/2 min-w-68 self-end justify-self-end" />
      <UserAccess className="mb-4 self-end" />
      <CartButton className="mb-4 self-end pr-10" />
      <div className="border-plomo/30 col-span-full border-y">
        <MainNav className="justify-self-center" />
      </div>
    </div>
  );
};
