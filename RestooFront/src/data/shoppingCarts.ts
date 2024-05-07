import img1 from "../assets/images/small/tabel-1.png";
import img2 from "../assets/images/small/tabel-2.png";
import img3 from "../assets/images/small/tabel-3.png";
import img4 from "../assets/images/small/tabel-4.png";
import img5 from "../assets/images/small/tabel-5.png";

interface shoppingCart {
  id: number;
  image: string;
  title: string;
  size: string;
  addon: string;
  addonPrice: number;
  unitPrice: number;
  totalPrice: number;
  qty: number;
}

export const cartInfo: shoppingCart[] = [
  {
    id: 1,
    image: img1,
    title: "Eggplant Baked with Cheese",
    size: "Small",
    addon: "Soft Drinks",
    addonPrice: 30,
    unitPrice: 120,
    totalPrice: 120,
    qty: 2,
  },
  {
    id: 2,
    image: img2,
    title: "Roasted Steak with Garnish",
    size: "Small",
    addon: "Soft Drinks",
    addonPrice: 30,
    unitPrice: 120,
    totalPrice: 120,
    qty: 2,
  },
  {
    id: 3,
    image: img3,
    title: "Chicken Skewers with Slices",
    size: "Small",
    addon: "Soft Drinks",
    addonPrice: 30,
    unitPrice: 120,
    totalPrice: 120,
    qty: 2,
  },
  {
    id: 4,
    image: img4,
    title: "Roasted Steak with Garnish",
    size: "Small",
    addon: "Soft Drinks",
    addonPrice: 30,
    unitPrice: 120,
    totalPrice: 120,
    qty: 2,
  },
  {
    id: 5,
    image: img5,
    title: "Roasted Steak with Garnish",
    size: "Small",
    addon: "Soft Drinks",
    addonPrice: 30,
    unitPrice: 120,
    totalPrice: 120,
    qty: 2,
  },
];
