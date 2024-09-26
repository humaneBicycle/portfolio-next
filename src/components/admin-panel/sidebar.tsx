import Link from "next/link";
import { Contact, PanelsTopLeft } from "lucide-react";

import { cn } from "@/lib/utils";
import { useStore } from "@/hooks/use-store";
import { Button } from "@/components/ui/button";
import { Menu } from "@/components/admin-panel/menu";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";
import { SidebarToggle } from "@/components/admin-panel/sidebar-toggle";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { House } from "lucide-react";

export function Sidebar() {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  if (!sidebar) return null;

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300",
        sidebar?.isOpen === false ? "w-[90px]" : "w-72"
      )}
    >
      <SidebarToggle isOpen={sidebar?.isOpen} setIsOpen={sidebar?.setIsOpen} />
      <div className="relative h-full flex flex-col px-3 py-4 overflow-y-auto shadow-md dark:shadow-zinc-800">
        <Button
          className={cn(
            "transition-transform ease-in-out duration-300 mb-1",
            sidebar?.isOpen === false ? "translate-x-1" : "translate-x-0"
          )}
          variant="link"
          asChild
        >
          <>
            <h1
              className={cn(
                "font-bold text-lg whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300",
                sidebar?.isOpen === false
                  ? "-translate-x-96 opacity-0 hidden"
                  : "translate-x-0 opacity-100"
              )}
            >
              Sidebar.tsx
            </h1>
          </>
        </Button>
        <Menu isOpen={sidebar?.isOpen} />
        <Button
          className={cn(
            "transition-transform ease-in-out duration-300 mb-1 mt-10",
            sidebar?.isOpen === false ? "translate-x-1" : "translate-x-0"
          )}
          variant="link"
          asChild
        >
          <>
            <h1
              className={cn(
                "font-bold text-lg whitespace-nowrap mt-8 transition-[transform,opacity,display] ease-in-out duration-300",
                sidebar?.isOpen === false
                  ? "-translate-x-96 opacity-0 hidden"
                  : "translate-x-0 opacity-100"
              )}
            >
              Contact
            </h1>
            <ul className="flex flex-col min-h-[50vh] items-start space-y-1 px-2 mt-8">
              <li className={cn("w-full")}>
                <Button
                  variant={"ghost"}
                  className="w-full justify-start h-10 mb-1"
                  asChild
                >
                  <Link href={"mailto:abhayasood99@gmail.com"}>
                    <span
                      className={cn(sidebar?.isOpen === false ? "" : "mr-4")}
                    >
                      <Mail size={18} />
                    </span>
                    <p
                      className={cn(
                        "max-w-[200px] truncate",
                        sidebar?.isOpen === false
                          ? "-translate-x-96 opacity-0"
                          : "translate-x-0 opacity-100"
                      )}
                    >
                      abhayasood99@gmail.com
                    </p>
                  </Link>
                </Button>
              </li>
              <li className="w-full">
                <Button
                  variant={"ghost"}
                  className="w-full justify-start h-10 mb-1"
                  asChild
                >
                  <Link href={"tel:+91 98055 04162"}>
                    <span
                      className={cn(sidebar?.isOpen === false ? "" : "mr-4")}
                    >
                      <Phone size={18} />
                    </span>
                    <p
                      className={cn(
                        "max-w-[200px] truncate",
                        sidebar?.isOpen === false
                          ? "-translate-x-96 opacity-0"
                          : "translate-x-0 opacity-100"
                      )}
                    >
                      +91 98055 04162
                    </p>
                  </Link>
                </Button>
              </li>
              <li className="w-full">
                <Button
                  variant={"ghost"}
                  className="w-full justify-start h-10 mb-1"
                  asChild
                >
                  <Link href={""}>
                    <span
                      className={cn(sidebar?.isOpen === false ? "" : "mr-4")}
                    >
                      <House size={18} />
                    </span>
                    <p
                      className={cn(
                        "max-w-[200px] truncate",
                        sidebar?.isOpen === false
                          ? "-translate-x-96 opacity-0"
                          : "translate-x-0 opacity-100"
                      )}
                    >
                      NITH Campus, Hamirpur
                    </p>
                  </Link>
                </Button>
              </li>
            </ul>
          </>
        </Button>
      </div>
    </aside>
  );
}
