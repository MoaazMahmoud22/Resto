import img1 from "../assets/images/thumb/traditional-3.png";
import img2 from "../assets/images/thumb/traditional-4.png";
import img3 from "../assets/images/thumb/traditional-5.png";
import img4 from "../assets/images/thumb/traditional-6.png";
import img5 from "../assets/images/thumb/featured-1.png";
import img6 from "../assets/images/thumb/featured-2.png";
import img7 from "../assets/images/thumb/featured-3.png";
import pImg1 from "../assets/images/thumb/popular-1.png";
import pImg2 from "../assets/images/thumb/popular-2.png";
import pImg3 from "../assets/images/thumb/popular-3.png";
import pImg4 from "../assets/images/thumb/popular-4.png";
import pImg5 from "../assets/images/thumb/popular-5.png";
import pImg6 from "../assets/images/thumb/popular-6.png";
import tagImg from "../assets/images/victor/populer.png";

export interface gridFoodInt {
  id: number;
  title: string;
  img: string;
  items: string[];
  reviews: string;
  price: number;
  offer: string;
  tags?: string;
}

export interface listFoodInt {
  id: number;
  title: string;
  img: string;
  items: string[];
  reviews: string;
  price: number;
}

export const gridFoods: gridFoodInt[] = [
  {
    id: 1,
    title: "Pork Chop with Apple Chutney",
    img: img1,
    items: ["4 Piece Chicken", "Spicy Sauce"],
    reviews: "4.7(2.5K)",
    price: 18.0,
    offer: "20% Off",
    tags: tagImg,
  },
  {
    id: 2,
    title: "Eggplant Parmesan & Linguine",
    img: img2,
    items: ["4 Piece Chicken", "Spicy Sauce"],
    reviews: "4.7(2.5K)",
    price: 40.0,
    offer: "20% Off",
  },
  {
    id: 3,
    title: "Fish Tacos with Chipotle Crema",
    img: img3,
    items: ["4 Piece Chicken", "Spicy Sauce"],
    reviews: "4.7(2.5K)",
    price: 30.0,
    offer: "20% Off",
  },
  {
    id: 4,
    title: "Quinoa-Stuffed Bell Pepper",
    img: img4,
    items: ["4 Piece Chicken", "Spicy Sauce"],
    reviews: "4.7(2.5K)",
    price: 30.0,
    offer: "20% Off",
  },
  {
    id: 5,
    title: "Baked Chicken Wings and Legs",
    img: img5,
    items: ["4 Piece Chicken", "Spicy Sauce"],
    reviews: "4.7(2.5K)",
    price: 30.0,
    offer: "20% Off",
  },
  {
    id: 6,
    title: "Fish Tacos with Chipotle Crema",
    img: img3,
    items: ["4 Piece Chicken", "Spicy Sauce"],
    reviews: "4.7(2.5K)",
    price: 30.0,
    offer: "20% Off",
  },
  {
    id: 7,
    title: "Quinoa-Stuffed Bell Pepper",
    img: img4,
    items: ["4 Piece Chicken", "Spicy Sauce"],
    reviews: "4.7(2.5K)",
    price: 18.0,
    offer: "20% Off",
    tags: tagImg,
  },
  {
    id: 8,
    title: "Baked Chicken Wings and Legs",
    img: img6,
    items: ["4 Piece Chicken", "Spicy Sauce"],
    reviews: "4.7(2.5K)",
    price: 40.0,
    offer: "20% Off",
  },
  {
    id: 9,
    title: "Fish Tacos with Chipotle Crema",
    img: img7,
    items: ["4 Piece Chicken", "Spicy Sauce"],
    reviews: "4.7(2.5K)",
    price: 30.0,
    offer: "20% Off",
  },
];

export const listFoods: listFoodInt[] = [
  {
    id: 1,
    title: "Quinoa-Stuffed Bell Pepper",
    img: pImg1,
    items: ["4 Piece Chicken", "Spicy Sauce"],
    reviews: "4.7(2.5K)",
    price: 30.0,
  },
  {
    id: 2,
    title: "Grilled Pork Chop Chutney",
    img: pImg2,
    items: ["4 Piece Chicken", "Spicy Sauce"],
    reviews: "4.7(2.5K)",
    price: 30.0,
  },
  {
    id: 3,
    title: "Fish Tacos Chipotle Crema",
    img: pImg3,
    items: ["4 Piece Chicken", "Spicy Sauce"],
    reviews: "4.7(2.5K)",
    price: 30.0,
  },
  {
    id: 4,
    title: "BBQ Pulled Pork Sandwich",
    img: pImg4,
    items: ["4 Piece Chicken", "Spicy Sauce"],
    reviews: "4.7(2.5K)",
    price: 30.0,
  },
  {
    id: 5,
    title: "Greens Salad Vinaigrette",
    img: pImg5,
    items: ["4 Piece Chicken", "Spicy Sauce"],
    reviews: "4.7(2.5K)",
    price: 30.0,
  },
  {
    id: 6,
    title: "Bruschetta Tomato & Basil",
    img: pImg6,
    items: ["4 Piece Chicken", "Spicy Sauce"],
    reviews: "4.7(2.5K)",
    price: 30.0,
  },
  {
    id: 7,
    title: "Quinoa-Stuffed Bell Pepper",
    img: pImg1,
    items: ["4 Piece Chicken", "Spicy Sauce"],
    reviews: "4.7(2.5K)",
    price: 30.0,
  },
  {
    id: 8,
    title: "Grilled Pork Chop Chutney",
    img: pImg2,
    items: ["4 Piece Chicken", "Spicy Sauce"],
    reviews: "4.7(2.5K)",
    price: 30.0,
  },
  {
    id: 9,
    title: "Fish Tacos Chipotle Crema",
    img: pImg3,
    items: ["4 Piece Chicken", "Spicy Sauce"],
    reviews: "4.7(2.5K)",
    price: 30.0,
  },
  {
    id: 10,
    title: "BBQ Pulled Pork Sandwich",
    img: pImg4,
    items: ["4 Piece Chicken", "Spicy Sauce"],
    reviews: "4.7(2.5K)",
    price: 30.0,
  },
  {
    id: 11,
    title: "Greens Salad Vinaigrette",
    img: pImg5,
    items: ["4 Piece Chicken", "Spicy Sauce"],
    reviews: "4.7(2.5K)",
    price: 30.0,
  },
  {
    id: 12,
    title: "Bruschetta Tomato & Basil",
    img: pImg6,
    items: ["4 Piece Chicken", "Spicy Sauce"],
    reviews: "4.7(2.5K)",
    price: 30.0,
  },
];
