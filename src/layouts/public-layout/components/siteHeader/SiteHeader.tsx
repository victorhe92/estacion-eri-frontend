import logo from "@/assets/LOGOTIPO-ESTACIÓN ERI.svg";
import { CartButton } from "./CartButton";
import { MainNav } from "./MainNav";
import { SearchBar } from "./SearchBar";
import { UserAccess } from "./UserAccess";

export const SiteHeader = () => {
  return (
    <div className="grid grid-cols-[auto_1fr_auto_auto] gap-5 px-50">
      <img src={logo} alt="Logotipo estación eri" className="mt-5 h-25" />
      <SearchBar className="mb-4 w-[60%] min-w-xs self-end justify-self-end" />
      <UserAccess className="mb-4 self-end" />
      <CartButton className="mb-4 self-end" />
      <MainNav />
    </div>
  );
};
