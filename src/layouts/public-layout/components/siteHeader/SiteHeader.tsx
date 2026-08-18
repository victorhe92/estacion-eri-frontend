import logo from "@/assets/LOGOTIPO-ESTACIÓN ERI.svg";
import { CartButton } from "./CartButton";
import { MainNav } from "./MainNav";
import { SearchBar } from "./SearchBar";
import { UserAccess } from "./UserAccess";

export const SiteHeader = () => {
  return (
    <div className="grid grid-cols-[auto_1fr_auto_auto] border-2 px-50">
      <img src={logo} alt="Logotipo estación eri" className="h-25" />
      <SearchBar className="max-w-[50%] min-w-xs self-end justify-self-end pb-4" />
      <UserAccess />
      <CartButton />
      <MainNav />
    </div>
  );
};
