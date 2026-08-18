import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";

interface Props {
  className?: string;
}

export const SearchBar = ({ className }: Props) => {
  return (
    <div className={cn("", className)}>
      <InputGroup
        className={cn(
          "group bg-rosado/30 focus-within:bg-rosado/50 rounded-full text-xs",
        )}
      >
        <InputGroupInput
          placeholder="Buscas tus productos favoritos..."
          className="text-plomo md:text-xs"
        />
        <InputGroupAddon align="inline-end" className="pr-0.4">
          <InputGroupButton
            aria-label="Buscar"
            size="sm"
            className="hover:bg-rosado rounded-full"
          >
            <SearchIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};
