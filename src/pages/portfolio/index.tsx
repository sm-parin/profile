import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  useParams,
} from "react-router-dom";
import RootLayout from "../../components/layout/root-layout";

import Home from "../../modules/home";
import Work from "../../modules/work";
import Projects from "../../modules/projects";
import About from "../../modules/about";
import ContactMe from "../../modules/contact";
import WorkDetailPage from "../../modules/work/detail";
import { response } from "../../data/response";
import { isLocalhost } from "../../utils/functions/helper";

export const Portfolio = () => {
  const siteMap = [
    {
      path: "/",
      element: <RootLayout data={response} />,
      children: [
        { index: true, element: <Home data={response.home} /> },
        { path: "work", element: <Work data={response.work} /> },
        {
          path: "work/:workId",
          element: <WorkDetailPage />,
        },
        { path: "about", element: <About data={response.about} /> },
      ],
    },
  ];

  const router = createBrowserRouter(siteMap, {
    basename: `${isLocalhost() ? "/" : "/profile"}`,
  });

  return <RouterProvider router={router} />;
};

export default Portfolio;
