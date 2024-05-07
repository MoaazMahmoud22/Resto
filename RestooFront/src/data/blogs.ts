import img1 from "../assets/images/thumb/news-1.png";
import img2 from "../assets/images/thumb/news-2.png";
import img3 from "../assets/images/thumb/news-3.png";
import img4 from "../assets/images/thumb/blog-4.png";
import img5 from "../assets/images/thumb/blog-5.png";
import img6 from "../assets/images/thumb/blog-6.png";
import img7 from "../assets/images/thumb/blog-7.png";
import img8 from "../assets/images/thumb/blog-8.png";
import img9 from "../assets/images/thumb/blog-9.png";
import img10 from "../assets/images/thumb/blog-10.png";
import img11 from "../assets/images/thumb/blog-11.png";
import img12 from "../assets/images/thumb/blog-12.png";

export interface blogsInit {
  id: number;
  img: string;
  title: string;
  readingTime: number;
  description: string;
}

export const blogs: blogsInit[] = [
  {
    id: 1,
    img: img1,
    description: "Exploring Culinary Delights and Gastronomic Adventures.",
    readingTime: 3,
    title: "Stories, Media",
  },
  {
    id: 2,
    img: img2,
    description: "Flavorful Fork: Exploring the World of Taste.",
    readingTime: 3,
    title: "Stories, Media",
  },
  {
    id: 3,
    img: img3,
    description: "Hungry Wanderer, Global Flavors Explored.",
    readingTime: 3,
    title: "Stories, Media",
  },
  {
    id: 4,
    img: img4,
    description: "Chef Spotlight: Behind the Scenes of Culinary Mastery",
    readingTime: 3,
    title: "Stories, Media",
  },
  {
    id: 5,
    img: img5,
    description: "Flavorful Fusion: Exploring the Art of Culinary Blending",
    readingTime: 3,
    title: "Stories, Media",
  },
  {
    id: 6,
    img: img6,
    description: "Time-Honored Recipes with a Modern Twist",
    readingTime: 3,
    title: "Stories, Media",
  },
  {
    id: 7,
    img: img7,
    description: "Exploring Culinary Delights and Gastronomic Adventures.",
    readingTime: 3,
    title: "Stories, Media",
  },
  {
    id: 8,
    img: img8,
    description: "Flavorful Fork: Exploring the World of Taste.",
    readingTime: 3,
    title: "Stories, Media",
  },
  {
    id: 9,
    img: img9,
    description: "Hungry Wanderer, Global Flavors Explored.",
    readingTime: 3,
    title: "Stories, Media",
  },
  {
    id: 10,
    img: img10,
    description: "Exploring Culinary Delights and Gastronomic Adventures.",
    readingTime: 3,
    title: "Stories, Media",
  },
  {
    id: 11,
    img: img11,
    description: "Flavorful Fork: Exploring the World of Taste.",
    readingTime: 3,
    title: "Stories, Media",
  },
  {
    id: 12,
    img: img12,
    description: "Hungry Wanderer, Global Flavors Explored.",
    readingTime: 3,
    title: "Stories, Media",
  },
];
