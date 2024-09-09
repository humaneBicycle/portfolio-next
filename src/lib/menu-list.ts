import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon,
  Rss,
  File,
  FolderGit,
  User,
  Phone,
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/",
          label: "about_me.tsx",
          active: pathname.includes("/about"),
          icon: User,
          submenus: [],
        },
        {
          href: "/projects",
          label: "projects.tsx",
          active: pathname.includes("/dashboard"),
          icon: FolderGit,
          submenus: [],
        },
        {
          href: "/resume",
          label: "Résumé",
          active: pathname.includes("/resume"),
          icon: File,
          submenus: [],
        },
        {
          href: "/blogs",
          label: "blogs.tsx",
          active: pathname.includes("/blogs"),
          icon: Rss,
          submenus: [],
        },
      ],
    },
  ];
}
