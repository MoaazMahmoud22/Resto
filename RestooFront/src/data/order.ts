export interface ordersInt {
  id: number;
  title: string;
  date: string;
  price: number;
  status: string;
}
export const orders: ordersInt[] = [
  {
    id: 1,
    title: "Eggplant Baked with Cheese",
    date: "May 01, 2023",
    price: 100,
    status: "Active",
  },
  {
    id: 2,
    title: "Baked with Cheese",
    date: "May 01, 2023",
    price: 200,
    status: "Successful",
  },
  {
    id: 3,
    title: "Eggplant Baked with Cheese",
    date: "May 01, 2023",
    price: 200,
    status: "Successful",
  },
  {
    id: 4,
    title: "Roasted Steak with Garnish",
    date: "May 01, 2023",
    price: 300,
    status: "Successful",
  },
  {
    id: 5,
    title: "Eggplant Baked with Cheese",
    date: "May 01, 2023",
    price: 250,
    status: "Successful",
  },
  {
    id: 6,
    title: "Chicken Skewers with Slices",
    date: "May 01, 2023",
    price: 200,
    status: "Successful",
  },
  {
    id: 7,
    title: "Chicken Skewers with Slices",
    date: "May 01, 2023",
    price: 200,
    status: "Cancel",
  },
  {
    id: 8,
    title: "Chicken Skewers with Slices",
    date: "May 01, 2023",
    price: 200,
    status: "Cancel",
  },
];
