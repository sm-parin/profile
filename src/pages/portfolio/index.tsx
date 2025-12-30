import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../../components/layout/root-layout";
import { getRoutes } from "../../utils/functions/getRoutes";
import { useAppContext } from "../../utils/context/AppContext";

export const Portfolio = () => {
  const { data } = useAppContext();
  const siteMap = [
    {
      path: "/",
      element: <RootLayout />,
      children: getRoutes(data),
    },
  ];
  const router = createBrowserRouter(siteMap);

  console.log("SiteMap:", siteMap);

  return <RouterProvider router={router} />;
};

export default Portfolio;
