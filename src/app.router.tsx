import { createBrowserRouter } from "react-router";
import { HomePage } from "./home/HomePage";
import { LoginPage } from "./login/LoginPage";
import { CategoryPage } from "./category/CategoryPage";
import { ProductPage } from "./product/ProductPage";
import { Layout } from "./layouts/Layout";

export const router = createBrowserRouter([
  {
    path: "/",

    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "category",
        element: <CategoryPage />,
      },
      {
        path: "product",
        element: <ProductPage />,
      },
    ],
  },
]);
