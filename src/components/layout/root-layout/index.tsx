import { Outlet } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";

const RootLayout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <body>
        <Outlet />
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default RootLayout;
