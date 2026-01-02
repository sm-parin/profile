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
        { path: "home", element: <Home /> },
        { path: "work", element: <Work /> },
        { path: "work/:workId", element: <WorkDetailPage /> },
        // { path: "projects", element: <Projects /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <ContactMe /> },
      ],
    },
  ];
  const router = createBrowserRouter(siteMap);

  return <RouterProvider router={router} />;
};

export default Portfolio;
