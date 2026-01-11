import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../../components/layout/root-layout";

import Home from "../../modules/home";
import Work from "../../modules/work";
import Projects from "../../modules/projects";
import About from "../../modules/about";
import ContactMe from "../../modules/contact";
import WorkDetailPage from "../../modules/work/detail";
import { AppProvider } from "../../utils/context/AppContext";
import { response } from "../../data/response";

const AppLayout = () => (
  <AppProvider response={response}>
    <RootLayout />
  </AppProvider>
);

export const Portfolio = () => {
  const siteMap = [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "work", element: <Work /> },
        { path: "work/:workId", element: <WorkDetailPage /> },
        { path: "about", element: <About /> },
      ],
    },
  ];

  const router = createBrowserRouter(siteMap, {
    basename: "/profile",
  });

  return <RouterProvider router={router} />;
};

export default Portfolio;
