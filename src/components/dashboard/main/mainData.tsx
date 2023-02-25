import { faBoxesAlt, faSitemap, faStore } from "@fortawesome/free-solid-svg-icons";
import { MainDashboardCardProps } from "@/components/ui/dashboard/card/mainDashboardCards/card";
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

export const NEW_STORES_DUE_TO_DATE = [
  {
    name: 'Jan',
    stores: 4000,
    products: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    stores: 3000,
    products: 1398,
    amt: 2210,
  },
  {
    name: 'May',
    stores: 2000,
    products: 9800,
    amt: 2290,
  },
  {
    name: 'Mar',
    stores: 2780,
    products: 3908,
    amt: 2000,
  },
  {
    name: 'Apr',
    stores: 1890,
    products: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    stores: 2390,
    products: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    stores: 3490,
    products: 4300,
    amt: 2100,
  },
];