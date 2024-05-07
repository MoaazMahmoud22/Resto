import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import AllFood from "./pages/all-food/all-food";
import List from "./pages/all-food/list";
import Grid from "./pages/all-food/grid";
import About from "./pages/about";
import Contact from "./pages/contact";
import Dashboard from "./pages/dashboard";
import EditProfile from "./pages/dashboard2/edit-profile";
import Address from "./pages/dashboard/address";
import AddFoodCategory from "./pages/dashboard/Add Food&Category";
import ViewFoodAndCategory from "./pages/dashboard/ViewFoodAndCategory";

import Order from "./pages/dashboard/order";
import Order2 from "./pages/dashboard/order";

import Wishlist from "./pages/dashboard2/wishlist";
import Reviews from "./pages/dashboard2/reviews";
import Reviews2 from "./pages/dashboard/reviews2";
import Payment from "./pages/dashboard/Payment";
import ChangePassword from "./pages/dashboard2/changePassword";
import SignUp from "./pages/signup/signUp";
import SignIn from "./pages/signin";
import FoodDetails from "./pages/foodDetails/foodDetails";
import ShoppingCart from "./pages/shopping-cart";

import Reservation from "./pages/Reservation";
import Dashboard2 from "./pages/dashboard2";
import Checkout from "./pages/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/all-food",
    Component: AllFood,
    children: [
      {
        index: true,
        element: <Grid />,
      },
      {
        path: "list",
        element: <List />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/checkout",
    element: <Checkout />
  },
  {
    path: "/contact",
    element: <Contact />,
  },

  {
    path: "/dashboard",
    Component: Dashboard,
    children: [
      {
        index: true,
        element: <AddFoodCategory />,
      },
      {
        path: "AddFoodCategory",
        element: <AddFoodCategory />,
      },

      {
        path: "ViewFoodAndCategory",
        element: <ViewFoodAndCategory />,
      },
      {
        path: "Reservation",
        element: <Address />,
      },
      {
        path: "order&recordering",
        element: <Order />,
      },
      {
        path: "Payment",
        element: <Payment/>,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "reviews2",
        element: <Reviews2 />,
      },
      {
        path: "change-password",
        element: <ChangePassword />,
      },
    ],
  },
  {
    path: "/dashboard2",
    Component: Dashboard2,
    children: [
      {
        index: true,
        element: <EditProfile />,
      },
      {
        path: "edit-address",
        element: <Address />,
      },
      {
        path: "order&recordering",
        element: <Order2 />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "reviews",
        element: <Reviews />,
      },
      {
        path: "change-password",
        element: <ChangePassword />,
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/food-details",
    element: <FoodDetails />,
  },

  {
    path: "/shopping-cart",
    element: <ShoppingCart />,
  },

  {
    path: "/Reservation",
    element: <Reservation />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
