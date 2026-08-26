import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router";
import { cn } from "@/lib/utils";

import { menuContent } from "./dummyData";

interface Props {
  className?: string;
}
export const MainNav = ({ className }: Props) => {
  return (
    <NavigationMenu className={cn(className)}>
      <NavigationMenuList>
        {menuContent.map((category) => (
          <NavigationMenuItem key={category.label}>
            {category.children.length === 0 ? (
              <>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-plomo text-sm font-bold",
                  )}
                  render={<Link to={category.href}>{category.label}</Link>}
                />
              </>
            ) : (
              <>
                <NavigationMenuTrigger
                  render={<Link to={category.href}></Link>}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-plomo text-sm font-bold",
                  )}
                >
                  {category.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 md:grid-cols-3">
                    {category.children.map((item) => (
                      <ListItem
                        key={item.label}
                        title={item.label}
                        href={item.href}
                      ></ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <Link to={href}>
            <div className="flex flex-col gap-1 text-sm">
              <div className="leading-none font-medium">{title}</div>
              {/* <div className="text-muted-foreground line-clamp-2">
                {children}
              </div> */}
            </div>
          </Link>
        }
      />
    </li>
  );
}
