import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../../components/layout/root-layout";
import { getRoutes } from "../../utils/functions/getRoutes";
import { response } from "../api/response";

export const siteMap = [
  {
    path: "/",
    element: <RootLayout />,
    children: getRoutes(response),
  },
];

const router = createBrowserRouter(siteMap);

export const Portfolio = () => {
  return <RouterProvider router={router} />;
};

export default Portfolio;
