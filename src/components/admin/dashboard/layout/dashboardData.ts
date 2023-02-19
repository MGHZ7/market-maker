import { DrawerProps } from "@/components/ui/admin/dashboard/layout/drawer";
import { DrawerSectionProps } from "@/components/ui/admin/dashboard/layout/drawer/section/section";

export const DRAWER_SECTIONS: DrawerSectionProps[] = [
  {
    title: "Stores",
    items: [
      {
        title: "Stores",
        href: "/stores",
      },
    ],
  },
];
