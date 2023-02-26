import { DrawerProps } from "@/components/ui/dashboard/layout/drawer";
import { DrawerSectionProps } from "@/components/ui/dashboard/layout/drawer/section/section";

export const DRAWER_SECTIONS: DrawerSectionProps[] = [
  {
    title: "Stores",
    items: [
      {
        title: "Stores",
        href: "/dashboard/stores",
      },
      {
        title: "Categories",
        href: "/dashboard/category",
      },
      {
        title: "Products",
        href: "/dashboard/products",
      },
    ],
  },
];
