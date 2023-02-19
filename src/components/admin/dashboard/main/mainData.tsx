import { faBoxesAlt, faSitemap, faStore } from "@fortawesome/free-solid-svg-icons";
import { MainDashboardCardProps } from "@/components/ui/admin/card/mainDashboardCards/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CARDS: MainDashboardCardProps[] = [
  {
    title: "Stores",
    icon: <FontAwesomeIcon icon={faStore} />,
    count: 1000,
  },
  {
    title: "Products",
    icon: <FontAwesomeIcon icon={faBoxesAlt} />,
    count: 928347,
  },
  {
    title: "Categories",
    icon: <FontAwesomeIcon icon={faSitemap} />,
    count: 25436,
  },
];
