import logo from "@/assets/LOGOTIPO-ESTACIÓN ERI.svg";
import { CartButton } from "./CartButton";
import { MainNav } from "./MainNav";
import { SearchBar } from "./SearchBar";
import { UserAccess } from "./UserAccess";

export const SiteHeader = () => {
  return (
    <div className="grid h-20 grid-cols-[auto_1fr_auto_auto]">
      <img src={logo} alt="Logotipo estación eri" className="h-full" />
      <SearchBar className="w-100 place-self-end" />
      <UserAccess />
      <CartButton />
      <MainNav />
    </div>
  );
};
