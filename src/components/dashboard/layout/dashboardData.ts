import { DrawerProps } from "@/components/ui/dashboard/layout/drawer";
import { DrawerSectionProps } from "@/components/ui/dashboard/layout/drawer/section/section";

export const DRAWER_SECTIONS: DrawerSectionProps[] = [
  {
    title: "Stores",
    items: [
      {
        title: "Stores",
        href: "/stores",
      },
      {
        title: "Categories",
        href: "/category",
      },
      {
        title: "Products",
        href: "/products",
      },
    ],
  },
];
